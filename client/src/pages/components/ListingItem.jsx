import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';

function ListingItem({ listing }) {
  return (
    <div className='bg-white shadow-lg hover:shadow-2xl transition-shadow overflow-hidden duration-300 rounded-xl w-full sm:w-[330px]'>
      <Link to={`/listing/${listing._id}`}>
        <img
          className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-1000'
          src={listing.imageUrls[0] || "https://i.pinimg.com/564x/36/7c/eb/367cebffa69f3a9f08620b3915429e5e.jpg"}
          alt='listing cover'
        />
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-cyan-950 font-semibold text-lg'>{listing.name}</p>
          <div className='flex items-center gap-2'>
            <MdLocationOn className='h-5 w-5 text-cyan-800' />
            <p className='truncate text-sm text-cyan-950 w-full'>{listing.address}</p>
          </div>
          <p className='font-bold text-cyan-950 text-md line-clamp-2'>{listing.description}</p>
          <p className='text-violet-900 font-extrabold mt-2 flex item-center'>
            
            {listing.offer
              ? listing.discountPrice.toLocaleString('en-US')
              : listing.regularPrice.toLocaleString('en-US')}
            $
            {listing.type === 'rent' && '/month'}
          </p>
          <div className=" text-sky-700 flex gap-4">
            <div className=" font-bold text-sm">
                {listing.bedrooms > 1 ? `${listing.bedrooms} beds` : `${listing.bedrooms} bed`}
            </div>
            <div className=" font-bold text-sm">
                {listing.bathrooms > 1 ? `${listing.bathrooms} baths` : `${listing.bathrooms} bath`}
            </div>

          </div>
        </div>
      </Link>
    </div>
  );
}

export default ListingItem;
