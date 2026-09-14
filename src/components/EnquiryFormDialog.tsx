import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const enquirySchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  companyName: z.string().min(2, "Company name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  productName: z.string(),
  quantity: z.string().optional(),
  message: z.string().optional(),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

interface EnquiryFormDialogProps {
  productName: string;
  trigger: React.ReactNode;
}

export default function EnquiryFormDialog({
  productName,
  trigger,
}: EnquiryFormDialogProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      productName,
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      quantity: "",
      message: "",
    },
  });

  React.useEffect(() => {
    setValue('productName', productName);
  }, [productName, setValue]);

  const onSubmit = async (data: EnquiryFormData) => {
    setSubmitError('');
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          productInterest: productName,
          type: 'quote',
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit quote request. Please try again.');
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error('Quote form error:', err);
      setSubmitError(err.message || 'Something went wrong. Please check your connection.');
    }
  };

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      // Reset form when dialog closes
      setTimeout(() => {
        setSubmitted(false);
        reset({ productName, fullName: "", companyName: "", email: "", phone: "", quantity: "", message: "" });
      }, 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <div onClick={() => setOpen(true)}>{trigger}</div>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center py-8 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#8CC63F]/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-[#8CC63F]" />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Enquiry Sent Successfully!
              </h3>
              <p className="text-[#6b7280] text-sm max-w-sm">
                Thank you for your interest in <strong>{productName}</strong>. Our team
                will get back to you within 24 hours.
              </p>
              <Button
                variant="default"
                className="mt-6"
                onClick={() => handleOpenChange(false)}
              >
                Close
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <DialogHeader>
                <DialogTitle
                  className="text-xl"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
                >
                  Enquire Now
                </DialogTitle>
                <DialogDescription>
                  Fill in your details and we'll get back to you with a quote for{" "}
                  <strong>{productName}</strong>.
                </DialogDescription>
              </DialogHeader>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid gap-4 mt-4"
              >
                {submitError && (
                  <div className="bg-red-50 text-red-600 border border-red-200 p-3 rounded-md text-xs">
                    {submitError}
                  </div>
                )}
                {/* Product Name — read only */}
                <div className="grid gap-2">
                  <Label htmlFor="enquiry-product">Product Name</Label>
                  <Input
                    id="enquiry-product"
                    {...register("productName")}
                    readOnly
                    className="bg-[#f9fafb] cursor-not-allowed font-semibold"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="enquiry-fullname">
                      Full Name <span className="text-[#ef4444]">*</span>
                    </Label>
                    <Input
                      id="enquiry-fullname"
                      placeholder="John Doe"
                      {...register("fullName")}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-[#ef4444]">{errors.fullName.message}</p>
                    )}
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="enquiry-company">
                      Company Name <span className="text-[#ef4444]">*</span>
                    </Label>
                    <Input
                      id="enquiry-company"
                      placeholder="Acme Corp"
                      {...register("companyName")}
                    />
                    {errors.companyName && (
                      <p className="text-xs text-[#ef4444]">{errors.companyName.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="enquiry-email">
                      Email Address <span className="text-[#ef4444]">*</span>
                    </Label>
                    <Input
                      id="enquiry-email"
                      type="email"
                      placeholder="john@company.com"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-xs text-[#ef4444]">{errors.email.message}</p>
                    )}
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="enquiry-phone">
                      Phone Number <span className="text-[#ef4444]">*</span>
                    </Label>
                    <Input
                      id="enquiry-phone"
                      type="tel"
                      placeholder="+91 00000 00000"
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p className="text-xs text-[#ef4444]">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="enquiry-quantity">Quantity Required</Label>
                  <Input
                    id="enquiry-quantity"
                    placeholder="e.g. 500 units"
                    {...register("quantity")}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="enquiry-message">
                    Message / Additional Requirements
                  </Label>
                  <Textarea
                    id="enquiry-message"
                    rows={3}
                    placeholder="Tell us about your specific requirements..."
                    {...register("message")}
                  />
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="default"
                  className="w-full mt-4 h-12 px-8 text-sm font-bold tracking-wide"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Enquiry <Send size={16} className="ml-1" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
