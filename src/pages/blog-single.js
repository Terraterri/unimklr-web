import Header from "../components/shared/header";
import Footer from "../components/shared/footer";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight  } from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";
import { AiOutlineComment } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";

export default function singleBlog() {
  return (
    <>
      <main className="main">
        <div
          className="site-breadcrumb"
          style={{ background: "url(assets/img/breadcrumb/01.jpg)" }}
        >
          <div className="container">
            <h2 className="breadcrumb-title">Blog</h2>
            <ul className="breadcrumb-menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <span><FaAngleRight /></span>
              
              <li className="active">Single Blog</li>
            </ul>
          </div>
        </div>
        
        <div className="blog-single-area pt-80 pb-80">
<div className="container">
<div className="row">
<div className="col-lg-8">
<div className="blog-single-wrapper">
<div className="blog-single-content">
<div className="blog-thumb-img">
<img src="assets/img/blog/single.jpg" alt="thumb" />
</div>
<div className="blog-info">
<div className="blog-meta">
<div className="blog-meta-left">
<ul>
<li><BiSolidUser /><Link href="#">Jean R Gunter</Link></li>
<li><AiOutlineComment /> 3.2k Comments</li>
<li><AiFillLike /> 1.4k Like</li>
</ul>
</div>
<div className="blog-meta-right">
<Link href="#" className="share-btn"><i className="far fa-share-alt"></i>Share</Link>
</div>
</div>
<div className="blog-details">
<h3 className="blog-details-title mb-20">It is a long established fact that a reader</h3>
<p className="mb-10">
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
</p>
<p className="mb-10">
But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
</p>
<blockquote className="blockqoute">
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
<h6 className="blockqoute-author">Mark Crawford</h6>
</blockquote>
<p className="mb-20">
In a free hour when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection.
</p>
<div className="row">
<div className="col-md-6 mb-20">
<img src="assets/img/blog/01.jpg" />
</div>
<div className="col-md-6 mb-20">
<img src="assets/img/blog/02.jpg" />
</div>
</div>
<p className="mb-20">
Power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection.
</p>
<hr />
<div className="blog-details-tags pb-20">
<h5>Tags : </h5>
<ul>
<li><Link href="#">Real Estate</Link></li>
<li><Link href="#">Business</Link></li>
<li><Link href="#">Apartment</Link></li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="col-lg-4">
<aside className="sidebar">
<div className="widget category">
<h5 className="widget-title">Recent Posts</h5>
<div className="category-list">
<Link href="#"><MdKeyboardDoubleArrowRight />Apartments<span>(20)</span></Link>
<Link href="#"><MdKeyboardDoubleArrowRight />Offices<span>(10)</span></Link>
<Link href="#"><MdKeyboardDoubleArrowRight />Luxary Villas<span>(15)</span></Link>
<Link href="#"><MdKeyboardDoubleArrowRight />Duplex House<span>(30)</span></Link>
<Link href="#"><MdKeyboardDoubleArrowRight />Commercial<span>(25)</span></Link>
</div>
                  </div>
                  
<div className="widget category">
<h5 className="widget-title">Category</h5>
<div className="category-list">
<Link href="#"><MdKeyboardDoubleArrowRight />Apartments<span>(20)</span></Link>
<Link href="#"><MdKeyboardDoubleArrowRight />Offices<span>(10)</span></Link>
<Link href="#"><MdKeyboardDoubleArrowRight />Luxary Villas<span>(15)</span></Link>
<Link href="#"><MdKeyboardDoubleArrowRight />Duplex House<span>(30)</span></Link>
<Link href="#"><MdKeyboardDoubleArrowRight />Commercial<span>(25)</span></Link>
</div>
</div>



</aside>
</div>
</div>
</div>
</div>

      </main>
    </>
  );
}
