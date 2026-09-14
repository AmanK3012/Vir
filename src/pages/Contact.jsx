import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Button } from '../components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  companyName: z.string().min(2, 'Company name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  productInterest: z.string().min(1, 'Please select a category'),
  projectDetails: z.string().min(10, 'Please describe your requirements'),
});

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      productInterest: '',
      projectDetails: '',
    },
  });

  const onSubmit = async (data) => {
    setSubmitError('');
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          type: 'contact',
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit enquiry. Please try again.');
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Contact form submission error:', err);
      setSubmitError(err.message || 'Something went wrong. Please check your connection.');
    }
  };

  return (
    <div className="page-contact">
      <div className="contact-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1>CONTACT <span className="text-primary">VIR ENGINEERS</span></h1>
            <p>Get in touch with our packaging experts today.</p>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <div className="contact-split">
          {/* Left Column */}
          <div className="contact-info-panel fade-in-section is-visible">
            <h2>Global Headquarters</h2>
            <div className="info-block">
              <MapPin className="text-primary" size={24} style={{ flexShrink: 0, marginTop: '4px' }} />
              <div>
                <strong>Ahmedabad Office</strong>
                <p>
                  917, Maple Trade Centre, Maple Tree Garden Homes Rd,<br />
                  Near Surdhara Circle, Sarathi Co-Operative Housing Society,<br />
                  Thaltej, Ahmedabad, Gujarat - 380052
                </p>
              </div>
            </div>

            <div className="info-block">
              <Phone className="text-primary" size={24} style={{ flexShrink: 0, marginTop: '4px' }} />
              <div>
                <strong>Direct Lines</strong>
                <p>
                  <a href="tel:+918980330315" style={{ color: 'inherit' }}>+91 89803 30315</a><br />
                  <a href="tel:+919824444481" style={{ color: 'inherit' }}>+91 98244 44481</a>
                </p>
              </div>
            </div>

            <div className="info-block">
              <Phone className="text-primary" size={24} style={{ flexShrink: 0, marginTop: '4px' }} />
              <div>
                <strong>For Exports</strong>
                <p>
                  <a href="tel:+919601482606" style={{ color: 'inherit' }}>+91 96014 82606</a><br />
                  <a href="mailto:global@impackaging.com" style={{ color: 'inherit' }}>global@impackaging.com</a>
                </p>
              </div>
            </div>

            <div className="info-block">
              <Mail className="text-primary" size={24} style={{ flexShrink: 0, marginTop: '4px' }} />
              <div>
                <strong>Email Address</strong>
                <p><a href="mailto:sales@virpackaging.com" style={{ color: 'inherit' }}>sales@virpackaging.com</a></p>
              </div>
            </div>

            <div className="branch-tags">
              <span className="branch-tag">Goa Branch</span>
              <span className="branch-tag">Rajkot Branch</span>
              <span className="branch-tag">Gandhidham Branch</span>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="contact-form-panel fade-in-section is-visible delay-200">
            <h2>Request a Quote</h2>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="quote-form"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px', textAlign: 'center' }}
              >
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(140, 198, 63, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <CheckCircle size={32} style={{ color: '#8CC63F' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, marginBottom: '8px' }}>Enquiry Sent Successfully!</h3>
                <p style={{ color: '#6b7280', maxWidth: '320px' }}>
                  Thank you for reaching out. Our team will review your requirements and get back to you within 24 hours.
                </p>
                <Button
                  variant="default"
                  className="mt-6"
                  onClick={() => { setSubmitted(false); reset(); }}
                  style={{ marginTop: '24px' }}
                >
                  Send Another Enquiry
                </Button>
              </motion.div>
            ) : (
              <form className="quote-form" onSubmit={handleSubmit(onSubmit)}>
                {submitError && (
                  <div style={{ backgroundColor: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca', padding: '12px', borderRadius: '6px', fontSize: '0.875rem', marginBottom: '16px' }}>
                    {submitError}
                  </div>
                )}
                <div className="form-row">
                  <div className="form-group">
                    <Label htmlFor="contact-fullname">Full Name</Label>
                    <Input
                      id="contact-fullname"
                      placeholder="John Doe"
                      {...register('fullName')}
                    />
                    {errors.fullName && (
                      <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px' }}>{errors.fullName.message}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <Label htmlFor="contact-company">Company Name</Label>
                    <Input
                      id="contact-company"
                      placeholder="Acme Corp"
                      {...register('companyName')}
                    />
                    {errors.companyName && (
                      <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px' }}>{errors.companyName.message}</p>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <Label htmlFor="contact-email">Email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="john@company.com"
                      {...register('email')}
                    />
                    {errors.email && (
                      <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px' }}>{errors.email.message}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <Label htmlFor="contact-phone">Phone Number</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      placeholder="+91 00000 00000"
                      {...register('phone')}
                    />
                    {errors.phone && (
                      <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px' }}>{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <Label htmlFor="contact-product">Product Interest</Label>
                  <Select onValueChange={(val) => setValue('productInterest', val)}>
                    <SelectTrigger id="contact-product">
                      <SelectValue placeholder="Select a category..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="corrosion_control">Corrosion Control Solutions (Zerust® Powered)</SelectItem>
                      <SelectItem value="moisture_control">Moisture Control Solutions (Clariant Advanced)</SelectItem>
                      <SelectItem value="air_dunnage_bags_inflator">Air Dunnage Bags & Air Bag Inflator</SelectItem>
                      <SelectItem value="pallet_stabilizing">Pallet Stabilizing (Grip Sheet, Grip Fix, Foil)</SelectItem>
                      <SelectItem value="cord_strap">Cord Strap & Wire Buckles</SelectItem>
                      <SelectItem value="pp_strapping">PP Strapping Solutions (Belts & Machines)</SelectItem>
                      <SelectItem value="pet_strapping">PET Strapping Solutions (Strap, Tools & Dispensers)</SelectItem>
                      <SelectItem value="steel_strapping">Steel Strapping Solutions</SelectItem>
                      <SelectItem value="wrapping_solutions">Wrapping Solutions (Stretch & Shrink Films)</SelectItem>
                      <SelectItem value="edge_protection">Edge & Corner Protection</SelectItem>
                      <SelectItem value="returnable_packaging">Returnable Packaging (Reusable PP Corrugated)</SelectItem>
                      <SelectItem value="pallets">Pallets (Plastic, Wooden & Compressed)</SelectItem>
                      <SelectItem value="storage_mhe">Storage & Material Handling (Warehouse Racking & MHE)</SelectItem>
                      <SelectItem value="speciality_tapes">Speciality Tapes (TESA Tapes & Industrial Adhesives)</SelectItem>
                      <SelectItem value="packaging_essentials">Packaging Essentials</SelectItem>
                      <SelectItem value="other">Other / General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.productInterest && (
                    <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px' }}>{errors.productInterest.message}</p>
                  )}
                </div>

                <div className="form-group">
                  <Label htmlFor="contact-details">Brief details of your requirement</Label>
                  <Textarea
                    id="contact-details"
                    rows={4}
                    placeholder="Tell us about your packaging requirements..."
                    {...register('projectDetails')}
                  />
                  {errors.projectDetails && (
                    <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px' }}>{errors.projectDetails.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="default"
                  className="submit-btn h-12 px-8 text-sm font-bold tracking-wide"
                  style={{ width: '100%', marginTop: '12px' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span style={{ width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)', borderTop: '2px solid white', borderRadius: '50%', animation: 'spin 0.6s linear infinite', display: 'inline-block' }} />
                      Sending...
                    </>
                  ) : (
                    <>
                      SUBMIT INQUIRY <Send size={18} />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

