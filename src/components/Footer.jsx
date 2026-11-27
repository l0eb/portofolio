import { SectionWrapper } from "../hoc";
import {useRef,useState} from "react"
import emailjs from 'emailjs-com'

const FooterContent = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    email:"",
  })
  const [userEmail,setEmail] = useState("")
  const [loading,setLoading] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault()
    setLoading(true)
    emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      {email:userEmail},
      import.meta.env.VITE_USER_ID)
    .then((result)=>{
        alert('Check your inbox!')
        setForm(name)
      })
  }

  const handleChange = (e) =>{
    const {email}=e.target.value
    // setForm({...form,[email]:email})
    setEmail(email)
  }

  return (
    <div className="text-white py-6">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase text-gray-300">
              Priyank Khobragade
            </h5>
            <ul className="mb-0">
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  Full Stack Dev
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase text-gray-300">
              Contact
            </h5>
            <ul className="mb-0">
              <li>
                <a
                  href="https://www.linkedin.com/in/priyank-khobragade"
                  className="text-gray-300 hover:text-gray-400"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/l0eb"
                  className="text-gray-300 hover:text-gray-400"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/loeb___"
                  className="text-gray-300 hover:text-gray-400"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase text-gray-300">
              Stay Updated
            </h5>

            <form className="flex sm:flex-col gap-2 w-full sm:w-auto">
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                className="bg-gray-700 text-white rounded-md px-4 py-2 sm:mt-2 flex-1 min-w-0 focus:outline-hidden"
              />
              <input
                type="submit"
                onChange={()=>setEmail(event.target.value)}
                value="Send"
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 sm:mt-2 focus:outline-hidden"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const WrappedFooter = SectionWrapper(FooterContent, "");
const Footer = () => {
  return (
    <footer className="bg-tertiary">
      <WrappedFooter />
    </footer>
  );
};

export default Footer;
