import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  selectedSection: string | null = null;
  modalTitle: string = '';
  modalContent: string = '';

  // Open modal with the respective content based on the selected card
  openModal(section: string) {
    this.selectedSection = section;

    switch (section) {
      case 'about':
        this.modalTitle = 'About Us';
        const aboutContent = `
        Welcome to SHIVIQUE by SHIV INTERIORS, where we define what it means to live in opulence.
        More than just a furniture brand, SHIVIQUE is Stylish Turnkey Excellence in Refined Architecture—crafting furniture that not only completes your space but also elevates your status. We believe that true elegance is not only seen but felt in the spaces we inhabit.

        At SHIVIQUE, we craft more than furniture—we curate experiences that embody sophistication and elevate your lifestyle. Each piece in our collection is a work of art, meticulously designed to resonate with those who value exclusivity and distinction.

        Rooted in the expertise of SHIV INTERIORS, SHIVIQUE blends timeless craftsmanship with modern innovation. Our team selects only the finest materials and works with master artisans to ensure that every piece is not only stunning but also built to last.

        Choosing SHIVIQUE by SHIV INTERIORS is more than selecting furniture—it’s embracing a lifestyle that speaks to your success, your taste, and your identity.
      `;

      // Split content into paragraphs
      this.modalContent = aboutContent.split('\n').map(paragraph => `<p>${paragraph.trim()}</p>`).join('');
    
        break;
      case 'terms':
        this.modalTitle = 'Terms and Conditions';
        const policyContent = `
        <p>At SHIVIQUE, customers are at the heart of everything we do. We are committed to providing an exceptional experience from the moment you explore our collection to the time your furniture arrives at your doorstep. Our customer policy is designed to ensure your satisfaction and to make your shopping experience as seamless as possible.</p>
        
        <h3>1. Quality Assurance</h3>
        <p>We take great pride in the quality and craftsmanship of our furniture. Each piece is carefully inspected before it leaves our workshop. If you receive an item that does not meet your desire, please contact us immediately, and we will make it right.</p>

        <h3>2. Order Process</h3>
        <ul>
          <li><strong>Customization:</strong> We offer a range of customization options to ensure that your furniture perfectly fits your space and style. Our design consultants are available to assist you in selecting the right materials, finishes, and dimensions.</li>
          <li><strong>Order Confirmation:</strong> Once you place your order, you will receive a confirmation email detailing your purchase. Please review your order carefully and contact us within 24 hours if any changes are needed.</li>
          <li><strong>Lead Time:</strong> Since many of our pieces are made-to-order, lead times may vary. We will provide you with an estimated delivery date at the time of purchase and keep you informed of any changes.</li>
        </ul>

        <h3>3. Payment Terms</h3>
        <ul>
          <li><strong>Deposit:</strong> A deposit may be required for custom orders. The amount will be specified at the time of order placement.</li>
          <li><strong>Payment Methods:</strong> We accept various payment methods, including credit cards, debit cards, UPI, and bank transfers. Full payment is required before the delivery of your furniture.</li>
          <li><strong>Security:</strong> All transactions are secured using the latest encryption technologies to protect your personal information.</li>
        </ul>

        <h3>4. Shipping & Delivery</h3>
        <ul>
          <li><strong>Delivery Area:</strong> We offer delivery services nationwide. For international shipping, please contact us for a custom quote.</li>
          <li><strong>White-Glove Service:</strong> Our white-glove delivery service includes careful handling, assembly, and placement of your furniture in your home or office.</li>
          <li><strong>Delivery Scheduling:</strong> We will contact you to schedule a convenient delivery time. Our team will ensure timely delivery and keep you informed of any changes.</li>
          <li><strong>Inspection:</strong> Upon delivery, please inspect your furniture to ensure it arrives in perfect condition. Report any damages or defects to our delivery team immediately.</li>
        </ul>

        <h3>5. Returns & Exchanges</h3>
        <ul>
          <li><strong>Satisfaction Guarantee:</strong> We want you to love your purchase. If you are not completely satisfied, you may return or exchange your item within 30 days of delivery, provided it is in its original condition and packaging. Custom orders and special items are final sale and cannot be returned or exchanged.</li>
          <li><strong>Return Process:</strong> To initiate a return, please contact our customer service team. We will provide instructions on how to return the item. Return shipping fees may apply.</li>
          <li><strong>Refunds:</strong> Refunds will be processed within 7-10 business days of receiving the returned item. The refund will be issued to the original payment method, minus any applicable shipping or restocking fees.</li>
        </ul>

        <h3>6. Warranty</h3>
        <ul>
          <li><strong>Limited Warranty:</strong> All of our furniture comes with a limited warranty covering manufacturing defects. The warranty period varies by product. Please refer to the product details or contact us for specific warranty information.</li>
          <li><strong>Claim Process:</strong> If you believe your furniture has a manufacturing defect, please contact our customer service team with your order details and a description of the issue. We will work with you to resolve the matter promptly.</li>
        </ul>

        <h3>7. Customer Support</h3>
        <ul>
          <li><strong>Dedicated Support Team:</strong> Our customer service team is here to assist you with any questions or concerns you may have. We are committed to providing timely and helpful responses.</li>
          <li><strong>Contact Information:</strong> You can reach us via email, phone, or chat during our business hours. We aim to respond to all inquiries within 24 hours.</li>
        </ul>
      `;

      this.modalContent = policyContent;
        break;
      case 'privacy':
        this.modalTitle = 'Privacy Policy';
        const privacyPolicyContent = `
      <p>SHIVIQUE is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, purchase our products, or interact with our services. Please read this policy carefully to understand our practices regarding your personal data.</p>
      
      <h3>1. Information We Collect</h3>
      <ul>
        <li><strong>Personal Information:</strong> We may collect personal information that you provide directly to us, such as your name, email address, phone number, billing and shipping address, and payment details when you place an order, sign up for our newsletter, or contact us for customer service.</li>
        <li><strong>Automatically Collected Information:</strong> When you visit our website, we may automatically collect certain information about your device and browsing behavior, including your IP address, browser type, referring/exit pages, and operating system. We may also collect information about how you interact with our website, such as the pages you visit and the links you click.</li>
      </ul>

      <h3>2. How We Use Your Information</h3>
      <ul>
        <li><strong>Order Processing:</strong> To process and fulfill your orders, including managing payments, shipping, and providing order updates.</li>
        <li><strong>Customer Service:</strong> To respond to your inquiries, provide customer support, and address any issues or concerns.</li>
        <li><strong>Personalization:</strong> To personalize your experience on our website and recommend products that may interest you.</li>
        <li><strong>Marketing:</strong> To send you promotional emails, newsletters, and special offers that we believe may be of interest to you. You can opt out of receiving marketing communications at any time by following the unsubscribe instructions in our emails.</li>
        <li><strong>Improvement of Services:</strong> To analyze and improve the functionality and user experience of our website and services.</li>
        <li><strong>Legal Compliance:</strong> To comply with legal obligations, prevent fraud, and enforce our terms and conditions.</li>
      </ul>

      <h3>3. How We Share Your Information</h3>
      <ul>
        <li><strong>Service Providers:</strong> Third-party vendors and service providers who perform services on our behalf, such as payment processing, order fulfillment, marketing, and data analytics.</li>
        <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of the transaction.</li>
        <li><strong>Legal Requirements:</strong> If required by law, regulation, or legal process, we may disclose your information to authorities or other relevant parties.</li>
      </ul>

      <h3>4. Cookies and Tracking Technologies</h3>
      <p>We use cookies and similar tracking technologies to collect and store information about your interactions with our website. Cookies help us understand how you use our site, enhance your browsing experience, and provide you with personalized content and advertising. You can manage your cookie preferences through your browser settings.</p>

      <h3>5. Data Security</h3>
      <p>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

      <h3>6. Your Rights and Choices</h3>
      <ul>
        <li><strong>Access and Correction:</strong> You have the right to access and update your personal information at any time. If you need assistance, please contact us.</li>
        <li><strong>Data Portability:</strong> You can request a copy of your personal data in a structured, commonly used, and machine-readable format.</li>
        <li><strong>Deletion:</strong> You have the right to request the deletion of your personal information, subject to certain legal exceptions.</li>
        <li><strong>Opt-Out:</strong> You can opt out of receiving marketing communications from us by following the unsubscribe instructions in our emails or contacting us directly.</li>
      </ul>

      <h3>7. Children's Privacy</h3>
      <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child under 18, we will take steps to delete that information.</p>

      <h3>8. Changes to This Privacy Policy</h3>
      <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the updated policy on our website and updating the effective date at the top of this page.</p>

      <h3>9. Contact Us</h3>
      <ul>
        <li><strong>Email:</strong> [Your Email Address]</li>
        <li><strong>Phone:</strong> [Your Phone Number]</li>
        <li><strong>Mail:</strong> [Your Physical Address]</li>
      </ul>
    `;

    this.modalContent = privacyPolicyContent;
        break;
      case 'faqs':
        break;
      default:
        this.modalTitle = '';
        this.modalContent = '';
    }
  }

  // Close modal
  closeModal() {
    this.selectedSection = null;
    this.modalTitle = '';
    this.modalContent = '';
  }

  onOutsideClick(event: Event) {
    this.closeModal();
  }

}
