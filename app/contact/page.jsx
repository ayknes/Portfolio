import ContactForm from "@/components/ui/ContactForm"

const Contact = () => {
    return (
        <div className='w-full z-20 h-full flex justify-center items-center'>
            <div className="w-11/12 gap-4 h-full pt-20 pb-8 flex flex-col justify-center items-center">
                <div className="w-full">
                    <h3 className="font-bold text-center text-2xl">Contact Me</h3>
                </div>
                <div className="w-full flex items-center justify-center">
                   <ContactForm/>
                </div>

            </div>
        </div>
    )
}

export default Contact