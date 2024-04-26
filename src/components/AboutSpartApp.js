import { useState } from 'react';
import './styles/about-spartapp.scss'

const AboutSpartApp = () => {
const [show,setShow] = useState(false)
const [text,setText] = useState('See more')

const handleShow = ()=>{
  setShow(!show)
  if(text === 'See more'){
    setText('See less')
  }else{
    setText('See more')
  }
}


  return (
    <div className='about-spartap-parent-wrapper'>
    <div className={`about-spartapp ${show && 'show'}`}>
      <div className="text">
        <h1>SpartApp: Your One-Stop Shop for Machine Parts</h1>
        <p>
          Welcome to SpartApp, your ultimate destination for all your machine
          part needs. As the leading spare part app, SpartApp provides a
          seamless platform for users to create an account, sign in, and
          effortlessly purchase any machine part they require. Our mission is to
          simplify the process of sourcing spare parts, making it convenient and
          efficient for individuals and businesses alike.
        </p>
      </div>
      <div className="text">
        <h1> A Comprehensive Selection of Machine Parts </h1>
        <p>
          At SpartApp, we understand the importance of finding the right machine
          parts quickly and easily. Our extensive inventory boasts a wide range
          of parts for various machines, ensuring that you can find exactly what
          you need, whether it's for automobiles, industrial equipment,
          appliances, or any other machinery. We collaborate with trusted
          suppliers to offer genuine, high-quality spare parts that meet the
          highest standards, giving you peace of mind and confidence in your
          purchases.
        </p>
      </div>
      <div className="text">
        <h1>User-Friendly Experience </h1>
        <p>
          We prioritize providing our users with a seamless and enjoyable
          experience on SpartApp. Our user-friendly interface allows you to
          browse through our vast catalog effortlessly, locate the desired
          parts, and complete your purchase within a few clicks. Our intuitive
          search function and detailed product descriptions enable you to find
          the right parts with ease, saving you time and effort.
        </p>
      </div>
      <div className="text">
        <h1>Secure and Convenient Transactions </h1>
        <p>
          SpartApp places great emphasis on the security of your transactions.
          We have implemented robust security measures to protect your personal
          and financial information, ensuring a safe shopping experience. You
          can choose from a range of trusted payment options to complete your
          purchase, including credit cards, debit cards, and secure online
          payment platforms. SpartApp guarantees secure transactions and the
          confidentiality of your sensitive data.
        </p>
      </div>
      <div className="text">
        <h1>Fast and Reliable Delivery </h1>
        <p>
          We understand that time is of the essence when it comes to acquiring
          machine parts. SpartApp partners with reputable shipping companies to
          provide fast and reliable delivery services. Once you place your
          order, we strive to process and dispatch it promptly, ensuring that
          your parts reach you in the shortest possible time frame. Our
          efficient logistics network enables us to deliver your purchases to
          your doorstep, saving you the hassle of searching for parts locally.
        </p>
      </div>
      <div className="text">
        <h1>Exceptional Customer Support </h1>
        <p>
          At SpartApp, we believe in delivering excellent customer service. Our
          dedicated support team is available to assist you with any inquiries,
          concerns, or technical difficulties you may encounter. Whether you
          need help finding a specific part, tracking your order, or resolving
          an issue, our knowledgeable and friendly customer support
          representatives are ready to provide you with the assistance you need.
          We value your satisfaction and strive to exceed your expectations at
          every step of the way.
        </p>
      </div>
      <div className="text">
        <h1>Terms and Conditions </h1>
        <p>
          Please take a moment to review the following terms and conditions that
          govern your use of the SpartApp website:
          <br />
          <span>
            These terms and conditions outline the rules and regulations for the
            use of our website and mobile application. By accessing and using
            SpartApp, you accept and agree to abide by these terms and
            conditions. If you disagree with any part of these terms, you should
            not use our platform.
          </span>
        </p>
        <br />
        <ul>
          <div className="terms">
            <h3>Account Creation:</h3>
            <li>
              You must be at least 13 years old to create an account on
              SpartApp.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account credentials and ensuring their security.
            </li>
          </div>
          <div className="terms">
            <h3>Product Listings:</h3>
            <li>
              SpartApp aims to provide accurate and up-to-date information about
              spare parts, including product descriptions, prices, and
              availability. However, we do not guarantee the accuracy or
              completeness of such information.
            </li>
            <li>
              Product images displayed on the platform are for illustrative
              purposes only and may not represent the exact appearance of the
              spare parts
            </li>
          </div>
          <div className="terms">
            <h3>Purchases and Transactions:</h3>
            <li>
              By placing an order on SpartApp, you agree to pay the specified
              price, including any applicable taxes and shipping fees.
            </li>
            <li>
              SpartApp reserves the right to cancel or refuse any order for any
              reason, including but not limited to unavailability of stock or
              payment issues.
            </li>
          </div>
          <div className="terms">
            <h3>Shipping and Delivery:</h3>
            <li>
              SpartApp aims to ensure timely delivery of purchased spare parts.
              However, we are not responsible for delays or failures in delivery
              caused by external factors beyond our control.
            </li>
            <li>
              Any additional charges related to customs duties, import taxes, or
              other fees imposed by the destination country are the
              responsibility of the buyer.
            </li>
          </div>
          <div className="terms">
            <h3>Returns and Refunds:</h3>
            <li>
              SpartApp has a return and replace but no refunds policy in place.
              Please refer to our dedicated policy section on the platform for
              detailed information about the process and eligibility criteria.
            </li>
          </div>
          <div className="terms">
            <h3>Intellectual Property:</h3>
            <li>
              All content and materials on SpartApp, including logos,
              trademarks, images, and text, are the intellectual property of
              SpartApp and its licensors. You are not permitted to use,
              reproduce, or modify these materials without explicit written
              permission.
            </li>
          </div>
          <div className="terms">
            <h3>Limitation of Liability:</h3>
            <li>
              SpartApp and its affiliates shall not be held liable for any
              direct, indirect, incidental, consequential, or exemplary damages
              arising from the use or inability to use our platform or any
              products purchased through it.
            </li>
          </div>
          <div className="terms">
            <h3>Governing Law:</h3>
            <li>
              These terms and conditions are governed by and construed in
              accordance with the laws of the jurisdiction where SpartApp is
              registered.
            </li>
          </div>
        </ul>
        <p>
          By continuing to use SpartApp, you acknowledge that you have read,
          understood, and agreed to these terms and conditions. Your use of
          SpartApp is subject to these terms, and any violation may result in
          the termination of your account or other appropriate legal actions.
        </p>
      </div>
    
    </div>
    <div className='show-more' onClick={handleShow}>{text}</div>
    </div>
  );
};

export default AboutSpartApp;
