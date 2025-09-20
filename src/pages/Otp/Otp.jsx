"use client"


import { useForm, Controller } from "react-hook-form"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"



export default function Otp() {
  const { control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      digit1: "",
      digit2: "",
      digit3: "",
      digit4: "",
      digit5: "",
    },
  })
const navigate = useNavigate()
  const inputRefs = useRef([])

  const onSubmit = (data) => {
    const otp = Object.values(data).join("")
    console.log("OTP:", otp)
    // Handle OTP verification
    navigate('/setPass')
  }

  const handleInputChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const fieldName = `digit${index + 1}` 
      setValue(fieldName, value)

      // Move to next input if value is entered
      if (value && index < 4) {
        inputRefs.current[index + 1]?.focus()
      }
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !watch(`digit${index + 1}`) && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }



  return (
    <div className="min-h-screen flex justify-center items-center">

    <div className=" w-[30%] bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Verification code</h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          We sent a reset link to {'demo@demo.com'}
          <br />
          enter 5 digit code that is mentioned in the email
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex justify-center gap-3">
          {[0, 1, 2, 3, 4].map((index) => (
            <Controller
              key={index}
              name={`digit${index + 1}`}
              control={control}
              render={({ field }) => (
                <input
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength={1}
                  className="w-12 h-12 text-center text-lg font-medium border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={field.value}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                />
              )}
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-slate-800 hover:bg-slate-900 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
        >
          Verify Code
        </button>

        <div className="text-center">
          <span className="text-gray-600 text-sm">You have not received the email? </span>
          <button
            type="button"
            // onClick={handleResend}
            className="text-green-500 hover:text-green-600 font-medium text-sm"
          >
            Resend
          </button>
        </div>
      </form>

    </div>
    </div>
  )
}
