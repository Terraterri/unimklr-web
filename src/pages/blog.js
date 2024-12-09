import Header from "../components/shared/header";
import Footer from "../components/shared/footer";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { BiSolidUser } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Blog() {
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
              
              <li className="active">Blog</li>
            </ul>
          </div>
        </div>
        
        <div className="blog_main py-120">
          <div className="container">
        <div className="row">
<div className="col-md-6 col-lg-4">
<div className="blog-item">
  <div className="blog-item-img">
  <img src="https://source.unsplash.com/1920x720/?house" />
  </div>
<div className="blog-item-info">
<h4 className="blog-title">
<Link href="#">There are many variations of passages available suffer</Link>
</h4>
<div className="blog-item-meta">
<ul>
<li><Link href="#"><BiSolidUser /> By Alicia Davis</Link></li>
<li><Link href="#"><MdDateRange />  May 12, 2023</Link></li>
</ul>
</div>
<p>
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
</p>
<Link className="theme-btn" href="/blog-single">Read More <AiOutlineArrowRight /></Link>
</div>
</div>
</div>
<div className="col-md-6 col-lg-4">
<div className="blog-item">
  <div className="blog-item-img">
  <img src="https://source.unsplash.com/1920x720/?villa" />
  </div>
<div className="blog-item-info">
<h4 className="blog-title">
<Link href="#">There are many variations of passages available suffer</Link>
</h4>
<div className="blog-item-meta">
<ul>
<li><Link href="#"><BiSolidUser /> By Alicia Davis</Link></li>
<li><Link href="#"><MdDateRange />  May 12, 2023</Link></li>
</ul>
</div>
<p>
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
</p>
<Link className="theme-btn" href="/blog-single">Read More <AiOutlineArrowRight /></Link>
</div>
</div>
</div>
<div className="col-md-6 col-lg-4">
<div className="blog-item">
  <div className="blog-item-img">
  <img src="https://source.unsplash.com/1920x720/?home" />
  </div>
<div className="blog-item-info">
<h4 className="blog-title">
<Link href="#">There are many variations of passages available suffer</Link>
</h4>
<div className="blog-item-meta">
<ul>
<li><Link href="#"><BiSolidUser /> By Alicia Davis</Link></li>
<li><Link href="#"><MdDateRange />  May 12, 2023</Link></li>
</ul>
</div>
<p>
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
</p>
<Link className="theme-btn" href="/blog-single">Read More <AiOutlineArrowRight /></Link>
</div>
</div>
</div>
<div className="col-md-6 col-lg-4">
<div className="blog-item">
  <div className="blog-item-img">
  <img src="https://source.unsplash.com/1920x720/?home" />
  </div>
<div className="blog-item-info">
<h4 className="blog-title">
<Link href="#">There are many variations of passages available suffer</Link>
</h4>
<div className="blog-item-meta">
<ul>
<li><Link href="#"><BiSolidUser /> By Alicia Davis</Link></li>
<li><Link href="#"><MdDateRange />  May 12, 2023</Link></li>
</ul>
</div>
<p>
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
</p>
<Link className="theme-btn" href="/blog-single">Read More <AiOutlineArrowRight /></Link>
</div>
</div>
</div>
<div className="col-md-6 col-lg-4">
<div className="blog-item">
  <div className="blog-item-img">
  <img src="https://source.unsplash.com/1920x720/?home" />
  </div>
<div className="blog-item-info">
<h4 className="blog-title">
<Link href="#">There are many variations of passages available suffer</Link>
</h4>
<div className="blog-item-meta">
<ul>
<li><Link href="#"><BiSolidUser /> By Alicia Davis</Link></li>
<li><Link href="#"><MdDateRange />  May 12, 2023</Link></li>
</ul>
</div>
<p>
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
</p>
<Link className="theme-btn" href="/blog-single">Read More <AiOutlineArrowRight /></Link>
</div>
</div>
</div>
<div className="col-md-6 col-lg-4">
<div className="blog-item">
  <div className="blog-item-img">
  <img src="https://source.unsplash.com/1920x720/?home" />
  </div>
<div className="blog-item-info">
<h4 className="blog-title">
<Link href="#">There are many variations of passages available suffer</Link>
</h4>
<div className="blog-item-meta">
<ul>
<li><Link href="#"><BiSolidUser /> By Alicia Davis</Link></li>
<li><Link href="#"><MdDateRange />  May 12, 2023</Link></li>
</ul>
</div>
<p>
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
</p>
<Link className="theme-btn" href="#">Read More <AiOutlineArrowRight /></Link>
</div>
</div>
</div>
          </div>
          </div>
          </div>
      </main>
    </>
  );
}
