"use client"

import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';

// Internal ContactForm component
const ContactFormFields = ({ disabled }) => {
  return (
    <div className="w-full">
      <div className="mb-4">
        <label htmlFor="sendername" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          type="text"
          name="sendername"
          id="sendername"
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          placeholder="Your name"
          required
          disabled={disabled}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="replyto" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          name="replyto"
          id="replyto"
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          placeholder="Your email address"
          required
          disabled={disabled}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          placeholder="What is this regarding?"
          required
          disabled={disabled}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows="5"
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          placeholder="Your message"
          required
          disabled={disabled}
        ></textarea>
      </div>

      <input type="hidden" name="to" value="boushaba.otmane@outlook.com" />
    </div>
  )
}

const Contact = () => {
    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)
    const [error, setError] = useState(null)
    const [errorDetails, setErrorDetails] = useState(null)
    const [isClient, setIsClient] = useState(false)
    const formRef = useRef()

    // Use useEffect to mark when component is mounted on client
    useEffect(() => {
        setIsClient(true)
        emailjs.init('-vrP2NOtjzI3bJxHi') // Updated to use the correct public key
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        // Check if we're on the client side
        if (!isClient) {
            setError("Please wait until the page is fully loaded")
            return
        }
        
        // Log form data for debugging
        console.log('Form submission started');
        const formData = {
          sendername: formRef.current.sendername.value,
          replyto: formRef.current.replyto.value,
          subject: formRef.current.subject.value,
          message: formRef.current.message.value,
          to: formRef.current.to.value
        };
        console.log('Form data:', formData);
        
        // Validate form data before submission
        if (!formData.sendername || !formData.replyto || !formData.subject || !formData.message) {
          setError('Please fill out all required fields');
          setErrorDetails('One or more required fields are empty');
          return;
        }
        
        // Reset states
        setSending(true)
        setSent(false)
        setError(null)
        setErrorDetails(null)
        
        try {
            const result = await emailjs.sendForm(
                'service_tbupw67',    // Service ID is correct
                'template_ewom07b',   // Template ID is correct
                formRef.current,
                '-vrP2NOtjzI3bJxHi'  // Updated to use the public key, not the private key
            );
            
            console.log('Email sent successfully:', result);
            console.log('Response text:', result.text);
            console.log('Status:', result.status);
            setSent(true)
            setSending(false)
            // Reset form
            formRef.current.reset()
        } catch (error) {
            console.error('Email error details:', error);
            
            // Create detailed error message
            let errorMsg = 'Failed to send your message. Please try again later.';
            let details = '';
            
            if (error.text) {
                errorMsg = `Error: ${error.text}`;
                details = `Status: ${error.status || 'Unknown'}`;
            } else if (error.message) {
                errorMsg = 'Error: ' + error.message;
                details = JSON.stringify(error, null, 2);
            }
            
            // Set detailed error information
            setError(errorMsg);
            setErrorDetails(details);
            setSending(false);
            
            // Also display error in browser console for debugging
            console.error('Error text:', error.text || 'No error text');
            console.error('Error status:', error.status || 'No status');
            console.error('Full error object:', error);
        }
    }

    // Only render the full form when on client-side
    if (!isClient) {
        return (
            <div className='w-full z-20 h-full flex justify-center items-center'>
                <div className="w-11/12 gap-4 h-full pt-20 pb-8 flex flex-col justify-center items-center">
                    <div className="w-full">
                        <h3 className="font-bold text-center text-2xl">Contact Me</h3>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center">
                        <p className="text-center">Loading contact form...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='w-full z-20 h-full flex justify-center items-center'>
            <div className="w-11/12 gap-4 h-full pt-20 pb-8 flex flex-col justify-center items-center">
                <div className="w-full">
                    <h3 className="font-bold text-center text-2xl">Contact Me</h3>
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                    {sent ? (
                        <div className="text-center p-6 bg-green-100 dark:bg-green-900 rounded-lg max-w-md mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h4 className="text-xl font-semibold mt-4">Message Sent!</h4>
                            <p className="mt-2">Thank you for reaching out. I&apos;ll get back to you as soon as possible.</p>
                            <button 
                                onClick={() => setSent(false)} 
                                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                            >
                                Send Another Message
                            </button>
                        </div>
                    ) : (
                        <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-lg">
                            {error && (
                                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                                    <p className="font-bold">{error}</p>
                                    {errorDetails && (
                                        <div className="mt-2 p-2 bg-red-50 rounded text-sm overflow-auto">
                                            <pre>{errorDetails}</pre>
                                        </div>
                                    )}
                                </div>
                            )}
                            <ContactFormFields disabled={sending} />
                            <div className="mt-6 flex justify-center">
                                <button 
                                    type="submit" 
                                    className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
                                    disabled={sending}
                                >
                                    {sending ? (
                                        <span className="flex items-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : "Send Message"}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Contact