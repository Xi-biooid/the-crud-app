import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper/modules'
import SwiperCore from 'swiper'
import 'swiper/css/bundle'
import ListingItem from './components/ListingItem'


function Home() {
  const [offerListings, setOfferListings]= useState([])
  const [saleListings, setSaleListings ]= useState([])
  const [rentListings, setRentListigs]= useState([])
  SwiperCore.use([Navigation])


  useEffect(()=>{
    const fetchOfferListings =async () =>{
      try {
        const res = await fetch ('/api/listing/get?offer=true&limit=4')
        const data = await res.json()
        setOfferListings(data)
        fetchRentListngs()
      } catch (error) {
        console.log(error)

      }
    }
    const fetchRentListngs = async ()=>{
      try {
        const res = await fetch ('/api/listing/get?type=rent&limit=4')
        const data = await res.json()
        setRentListigs(data)
        fetchSaleListings()
      } catch (error) {
        console.log(error)
      }
    }
    const fetchSaleListings = async ()=>{
      try {
        const res = await fetch ('/api/listing/get?type=sale&limit=4')
        const data = await res.json()
        setSaleListings(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchOfferListings()
  }, [])
  return (
      <div className="">
        <div className="flex flex-col gap-6 p-28 px-3 mx-auto max-w-6xl">
          <div>
            <h1 className='text-purple-950 font-bold text-3xl lg:text-6xl'>House Hunting Made Easy. <br /> Find your <span className='text-sky-600'>place</span> by one click </h1>
          </div>

          <div className="">
            <p className='text-sm text-cyan-800 sm:text-lg'>
                Embark on swift journeys to your cherished destinations with BiooidNest,<br/>
                driven by the revolutionary <span className='text-purple-800 font-bold hover:underline cursor-pointer'>Xi-biooid </span>technology.<br/> Our user-friendly features
                ensure an effortlessly delightful experience, <br/>helping you discover your favorite
                places with unparalleled speed and ease.
            </p>
          </div>
          <Link to={'/search'} className='font-bold underline hover:text-cyan-900 text-sm sm:text-lg'> Quick search here &#x2192;</Link>
        </div>

        <Swiper navigation>
        {offerListings && offerListings.length > 0 && offerListings.map((listing) => (
          <SwiperSlide key={listing._id}>
            <div
              style={{ background: `url(${listing.imageUrls[0]}) center no-repeat`, backgroundSize: "cover" }}
              className="h-[500px]"
            />
          </SwiperSlide>
        ))} 
      </Swiper>

    <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
      {offerListings && offerListings.length >0 && (
        <div className="">
          <div className="my-5">
            <h2 className='text-2xl font-semibold text-sky-950'>Recent offers</h2>
            <Link className='text-purple-900 hover:underline' to={'/search?offer=true'}>
              Show more offers
            </Link>
          </div>
          <div className="flex  flex-wrap gap-4">
          {offerListings && offerListings.length > 0 && offerListings.map((listing) => (
            <ListingItem listing={listing} key={listing._id} />
          ))}

          </div>
        </div>
      )}
      {offerListings && offerListings.length >0 && (
        <div className="">
          <div className="my-5">
            <h2 className='text-2xl font-semibold text-sky-950'>Recent places for rent</h2>
            <Link className='text-purple-900 hover:underline' to={'/search?type=rent'}>
              Show more places for rent
            </Link>
          </div>
          <div className="flex  flex-wrap gap-4">
          {rentListings && rentListings.length > 0 && rentListings.map((listing) => (
            <ListingItem listing={listing} key={listing._id} />
          ))}

          </div>
        </div>
      )}
      {saleListings && saleListings.length >0 && (
        <div className="">
          <div className="my-5">
            <h2 className='text-2xl font-semibold text-sky-950'>Recent sale places</h2>
            <Link className='text-purple-900 hover:underline' to={'/search?type=sale'}>
              Show more sales places
            </Link>
          </div>
          <div className="flex  flex-wrap gap-4">
          {offerListings && saleListings.length > 0 && saleListings.map((listing) => (
            <ListingItem listing={listing} key={listing._id} />
          ))}

          </div>
        </div>
      )}

    </div>
    <footer className=' h-96 bg-slate-900 flex flex-col justify-center text-center gap-20 p-3'>
      <h3 className=' text-sky-500'> <span className=' text-lg sm:text-8xl text-purple-600'>Xi-biooid<span className=' text-sky-500'>NEST</span></span><br />powered by Xi-biooid</h3>
      <p className='text-cyan-300'>copy right &#xa9; by Xi-biooid dec 2023 all rights reserved...</p>

    </footer>
    </div>
  )
}
export default Home
