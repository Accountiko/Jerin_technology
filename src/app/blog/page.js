"use client"
import MainLayout from "@/components/layout/MainLayout";
import useWow from "@/hooks/useWow";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore"; 
import {db} from '../../firebase'
import { useEffect, useState } from "react";


export function convertTitleToSlug(title) {
  return title
      .toLowerCase()                        // Convert to lowercase
      .trim()                               // Trim leading and trailing whitespace
      .replace(/[^a-z0-9\s-]/g, '')         // Remove all non-alphanumeric characters except spaces and hyphens
      .replace(/\s+/g, '-')                 // Replace spaces with hyphens
      .replace(/-+/g, '-');                 // Replace multiple hyphens with a single hyphen
}
const Blogpage = () => {

  const [blogs,setBlogs] = useState()
  const getdata = async()=>{
    const querySnapshot = await getDocs(collection(db, "blogs"));
    const blogs = []
    querySnapshot.forEach((doc) => {
      
      blogs.push({
        id:doc.id,
        ...doc.data()
      })
    });

    setBlogs(blogs)
    console.log(blogs)
    
  }
  function timestampToDateArray(timestamp) {
    // Convert seconds to milliseconds (JavaScript works with milliseconds)
    const milliseconds = timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000;
    
    // Create a Date object
    const date = new Date(milliseconds);
    
    // Extract day and month
    const day = date.getUTCDate().toString();
    const month = date.toLocaleString('default', { month: 'long' });
    
    return [day, month];
}
 

  useWow()
useEffect(()=>{
  getdata()
},[])
  return (
    <MainLayout>
      <div
        className="blog-grid-section scroll-margin pt-120 mb-120"
        id="blog-grid"
      >
        <div className="container">
          <div className="row g-4 mb-50">
            {blogs?.map((blog)=>(
 <div
 className="col-lg-4 col-md-6 wow animate fadeInDown"
 data-wow-delay="200ms"
 data-wow-duration="1500ms"
 key={blog.id}
>
 <div className="blog-card style-2">
   <div className="blog-card-img-wrap">
     <Link href="/blog/blog-details" className="card-img">
       <img src={blog.img_url} alt="" />
     </Link>
     <Link href="/blog" className="date">
       <span>
        
       <strong>{timestampToDateArray(blog.date)[0]}</strong> {timestampToDateArray(blog.date)[1]}
       </span>
     </Link>
   </div>
   <div className="card-content">
     <div className="blog-meta">
       <ul className="category">
         <li>
           <Link href="/blog">{blog.tag}</Link>
         </li>
       </ul>
       <div className="blog-comment">
        
       </div>
     </div>
     <h4>
       <Link href={`/blog/${encodeURIComponent(convertTitleToSlug(blog.title))}/${blog.id}`}>
        {blog.title}
       </Link>
     </h4>
     <Link href={`/blog/${encodeURIComponent(convertTitleToSlug(blog.title))}/${blog.id}`} className="read-more-btn">
       Read More
       <svg
         xmlns="http://www.w3.org/2000/svg"
         width={10}
         height={10}
         viewBox="0 0 10 10"
       >
         <path
           fillRule="evenodd"
           clipRule="evenodd"
           d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
         />
       </svg>
     </Link>
   </div>
 </div>
</div>
            ))}
           
            
          </div>
          {/* <div className="row">
            <div
              className="col-lg-12 d-flex justify-content-center wow animate fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="pagination-area">
                <ul className="paginations">
                  <li className="page-item active">
                    <a href="#">01</a>
                  </li>
                  <li className="page-item">
                    <a href="#">02</a>
                  </li>
                  <li className="page-item">
                    <a href="#">03</a>
                  </li>
                  <li className="page-item paginations-button">
                    <a href="#">
                      NXT
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={12}
                        viewBox="0 0 14 12"
                      >
                        <path d="M0.020025 6.33628C0.0901115 6.5271 0.25031 6.73476 0.400496 6.83017C0.550683 6.91997 0.946172 6.92558 5.76715 6.95364L10.9736 6.98171L9.08627 8.77205C7.85974 9.93381 7.16889 10.6297 7.11883 10.7476C6.94862 11.1517 7.10381 11.6961 7.44423 11.8981C7.63947 12.0216 8.01494 12.0328 8.18014 11.9318C8.24022 11.8925 9.53682 10.6803 11.0687 9.23226C12.941 7.45876 13.8722 6.53833 13.9273 6.42047C14.0775 6.05567 13.9923 5.65719 13.697 5.3429C13.2014 4.82656 8.1451 0.140237 8.00993 0.0728886C7.79466 -0.0337464 7.60943 -0.0225217 7.36413 0.100951C6.96864 0.302995 6.79843 0.909129 7.0137 1.31883C7.06376 1.41424 7.96988 2.301 9.02619 3.28316C10.0775 4.27093 10.9436 5.09034 10.9436 5.11279C10.9486 5.14085 8.61068 5.15769 5.74713 5.15769L0.550683 5.15769L0.385478 5.28116C0.135167 5.47759 0.0250308 5.67964 0.00500557 5.98271C-0.00500609 6.12863 -2.49531e-07 6.29139 0.020025 6.33628Z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </MainLayout>
  );
};

export default Blogpage;
