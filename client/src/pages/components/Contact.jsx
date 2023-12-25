
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Contact({listing}) {
    const [landlord, setLandlord]= useState(null )
    const [message, setMessage]= useState('')
    const onChange = (e) =>{
        setMessage(e.target.value)
    }

    useEffect(()=>{
        const fetchLandlord = async ()=>{
            try {
                const res = await fetch(`/api/user/${listing.userRef}`)
                const data = await res.json()
                setLandlord(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchLandlord()


    }, [listing.userRef])
  return (
    <>
     {landlord && (
        <div className="flex flex-col gap-2">
            <p>Contact <span className='font-bold'>{landlord.username}</span> for <span className='font-semibold'>{listing.name.toLowerCase()}</span></p>
            <textarea name="message" id="message"  rows="2"  value={message} onChange={onChange}
                placeholder='Enter your message here...'
                className='w-full border border-cyan-600 p-3 rounded-lg mt-2'
            ></textarea>

            <Link to={`mailto:${landlord.email}?subject=Regarding${listing.name}&body=${message}`}
            
            className='bg-cyan-950 text-cyan-400 text-center p-3 uppercase rounded-lg hover:opacity-90'
            >
                Send Message
            </Link>
        </div>
     )}
    </>
  )
}       

export default Contact
