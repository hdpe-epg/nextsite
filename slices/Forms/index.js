/**
 * @typedef {import("@prismicio/client").Content.FormsSlice} FormsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FormsSlice>} FormsProps
 * @param {FormsProps}
 */
import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const Forms = ({ slice }) => {
  const { id } = slice
  const [isDisabled, setIsDisabled] = React.useState(false)
  const [success, setSuccess] = React.useState(null)
  const [formInteraction, setFormInteraction] = React.useState(false)

  const handleFocus = () => {
    !formInteraction && setFormInteraction(true)
  }

  React.useEffect(() => {
    if (formInteraction) {
      const recaptchaScript = document.createElement('script')
      recaptchaScript.src = `https://www.google.com/recaptcha/api.js?render=6LeNpYQmAAAAAJZBts23HPXkhaJQpntrJTkDV1sD`
      recaptchaScript.async = true
      recaptchaScript.defer = true
      document.head.appendChild(recaptchaScript)
      return () => {
        // Get all script tags: returns HTMLcollection
        const scripts = document.getElementsByTagName('script')
        // Loop through the HTMLcollection (array-like but not array)
        for (var i = 0; i < scripts.length; i++) {
          // find script whose src value includes "recaptcha/releases"
          // this script is added when main recaptcha script is loaded

          if (
            scripts.item(i).attributes.getNamedItem('src') &&
            scripts
              .item(i)
              .attributes.getNamedItem('src')
              .value.includes('recaptcha/releases')
          ) {
            document.head.removeChild(scripts.item(i)) // remove script from head
          }
        }
        document.head.removeChild(recaptchaScript) // remove main recaptcha script from head
        // remove the recaptcha badge from the bottom right corner
        let badge = document.querySelector('.grecaptcha-badge')
        if (badge) {
          badge.parentElement.remove()
        }
      }
    }
  }, [formInteraction])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const formNames = {
    fullName: `fullName_${id}`,
    email: `email_${id}`,
    phone: `phone${id}`,
    organization: `organization_${id}`,
    role: `role_${id}`,
    location: `location_${id}`,
    message: `message_${id}`,
  }

  const submitData = async (formData, token) => {
    setIsDisabled(true)
    const formKeys = Object.keys(formData)
    let fullName
    let email
    let phone
    let organization
    let role
    let location
    let message

    formKeys.forEach(key => {
      key.indexOf('fullName') !== -1
        ? (fullName = formData[key])
        : key.indexOf('email') !== -1
        ? (email = formData[key])
        : key.indexOf('phone') !== -1
        ? (phone = formData[key])
        : key.indexOf('organization') !== -1
        ? (organization = formData[key])
        : key.indexOf('role') !== -1
        ? (role = formData[key])
        : key.indexOf('location') !== -1
        ? (location = formData[key])
        : (message = formData[key])
    })
    try {
      await axios({
        url: `/api/contact`,
        method: 'POST',
        data: {
          fullName,
          email,
          phone,
          organization,
          role,
          location,
          message,
          token,
        },
      }).then(res => {
        if (res.status === 200) {
          reset()
          setSuccess(true)
          setTimeout(() => {
            setSuccess(null)
            setIsDisabled(false)
          }, 5000)
        } else {
          console.log('res.status not 200')
          setSuccess(false)
          reset()
        }
      })
    } catch (err) {
      if (err.response) {
        console.log('server responded with non 2xx code: ', err.response.data)
      } else if (err.request) {
        console.log('no response received: ', err.request)
      } else {
        console.log('Error setting up response: ', err.message)
      }
    }
  }

  const sendMessage = formData => {
    console.log('formData', formData)
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute('6LeNpYQmAAAAAJZBts23HPXkhaJQpntrJTkDV1sD', {
          action: 'submit',
        })
        .then(token => {
          submitData(formData, token)
        })
    })
  }

  return (
    <section
      className={`prose relative mx-auto max-w-screen-sm py-12 md:prose-lg lg:prose-xl xl:prose-2xl`}
    >
      {success === true && (
        <p>Your message has been sent. Thank you for reaching out!</p>
      )}
      <form className="text-center" onSubmit={handleSubmit(sendMessage)}>
        <fieldset className={`grid gap-y-2`}>
          <label htmlFor={formNames.fullName}>
            <span className="sr-only">Full Name</span>
            <input
              name={formNames.fullName}
              type="text"
              placeholder={`Enter your full name here`}
              {...register(formNames.fullName, {
                required: 'Your full name is required.',
              })}
              className={`w-full max-w-sm rounded focus:border-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary lg:max-w-lg lg:text-lg`}
              onFocus={handleFocus}
            />
          </label>
          {errors[`${formNames.fullName}`] && (
            <p className="text-xs text-brand-secondary">
              {' '}
              &uarr; {errors[`${formNames.fullName}`].message}
            </p>
          )}
          <label htmlFor={formNames.email}>
            <span className="sr-only">Email</span>
            <input
              name={formNames.email}
              type="email"
              placeholder={`Enter the email address we should reply to...`}
              {...register(formNames.email, {
                required: 'Your email address is required.',
              })}
              className={`w-full max-w-sm rounded focus:border-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary  lg:max-w-lg lg:text-lg`}
              onFocus={handleFocus}
            />
          </label>
          {errors[`${formNames.email}`] && (
            <p className="text-xs text-brand-secondary">
              {' '}
              &uarr; {errors[`${formNames.email}`].message}
            </p>
          )}
          <label htmlFor={formNames.phone}>
            <span className="sr-only">Phone</span>
            <input
              name={formNames.phone}
              type="tel"
              placeholder={`Enter your best phone number here`}
              {...register(formNames.phone, {
                required: 'Your phone number is required.',
              })}
              className={`w-full max-w-sm rounded focus:border-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary lg:max-w-lg lg:text-lg`}
              onFocus={handleFocus}
            />
          </label>
          {errors[`${formNames.phone}`] && (
            <p className="text-xs text-brand-secondary">
              {' '}
              &uarr; {errors[`${formNames.phone}`].message}
            </p>
          )}

          <label htmlFor={formNames.organization}>
            <span className="sr-only">Organization</span>
            <input
              name={formNames.organization}
              type="text"
              placeholder={`What is your organization?`}
              {...register(formNames.organization, {})}
              className={`w-full max-w-sm rounded focus:border-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary lg:max-w-lg lg:text-lg`}
              onFocus={handleFocus}
            />
          </label>
          <label htmlFor={formNames.role}>
            <span className="sr-only">Role</span>
            <input
              name={formNames.role}
              type="text"
              placeholder={`What is your role in this organization?`}
              {...register(formNames.role, {})}
              className={`w-full max-w-sm rounded focus:border-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary lg:max-w-lg lg:text-lg`}
              onFocus={handleFocus}
            />
          </label>

          <label htmlFor={formNames.location}>
            <span className="sr-only">Location</span>
            <select
              defaultValue={`default`}
              name={formNames.location}
              {...register(formNames.location, {
                required: 'A location is required.',
                pattern: '^((?!Select).)*$',
              })}
              className="form-select w-full max-w-sm rounded focus:border-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary lg:max-w-lg lg:text-lg"
            >
              <option value="default" disabled hidden>
                Select a Location
              </option>
              <option value="British Columbia">British Columbia</option>
              <option value="Alberta">Alberta</option>
              <option value="Saskatchewan">Saskatchewan</option>
              <option value="Quebec">Quebec</option>
              <option value="Maritime Provinces">Maritime Provinces</option>
              <option value="NWT">NWT</option>
              <option value="Yukon, Nunavut">Yukon, Nunavut</option>
            </select>
          </label>
          {errors[`${formNames.location}`] && (
            <p className="text-xs text-brand-secondary">
              {' '}
              &uarr; {errors[`${formNames.location}`].message}
            </p>
          )}
        </fieldset>
        <label htmlFor={`message_${id}`}>
          <span className="sr-only">
            {`Compose your message to Zero Waste Canada below:`}
          </span>
          <textarea
            name={`message_${id}`}
            id={`message_${id}`}
            cols="30"
            rows="10"
            placeholder={`Craft your message to us here...`}
            className={`mt-6 w-full max-w-sm rounded focus:border-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary lg:max-w-lg lg:text-lg`}
            onFocus={handleFocus}
            {...register(formNames.message, {
              required: 'Your message is required so we know how we can help',
            })}
          ></textarea>
        </label>
        <div className="my-4">
          <input
            type={'submit'}
            className={`cursor-pointer rounded bg-brand-secondary px-4 py-3 text-sm font-bold text-neutral-100 transition duration-300 ease-in-out hover:bg-brand-primary hover:text-white ${
              isDisabled ? `bg-neutral-300 hover:bg-neutral-300` : ``
            }`}
            value={!isDisabled ? `Submit` : `Sending...`}
            disabled={isDisabled}
          />
          <p className="prose prose-sm mx-auto text-center dark:prose-invert prose-a:no-underline hover:prose-a:underline">
            This site is protected by reCAPTCHA and the{' '}
            <a href="https://policies.google.com/privacy">
              Google Privacy Policy
            </a>{' '}
            and <a href="https://policies.google.com/terms">Terms of Service</a>{' '}
            apply.
          </p>
        </div>
      </form>
    </section>
  )
}

export default Forms
