# Contact Form Setup Guide

Your portfolio now has a fully functional contact form with multiple backend options. Here's how to set it up:

## Option 1: Formspree (Recommended - Easiest)

1. **Go to [Formspree.io](https://formspree.io)**
2. **Sign up for a free account**
3. **Create a new form:**
   - Click "New Form"
   - Enter your email address (where you want to receive messages)
   - Copy the form endpoint (looks like `https://formspree.io/f/xpwznqnz`)
4. **Update the form action in your HTML:**
   - Find line ~2572 in `portfolio.html`
   - Replace `xpwznqnz` with your actual Formspree form ID
   - Example: `action="https://formspree.io/f/YOUR_FORM_ID"`

**That's it! Your form will now work immediately.**

## Option 2: EmailJS (Backup Method)

1. **Go to [EmailJS.com](https://www.emailjs.com)**
2. **Create a free account**
3. **Set up email service:**
   - Add your email service (Gmail, Outlook, etc.)
   - Note the Service ID
4. **Create email template:**
   - Create a template with variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
   - Note the Template ID
5. **Get your User ID from EmailJS dashboard**
6. **Update the JavaScript in your HTML:**
   - Find the EmailJS section in the contact form JavaScript
   - Replace placeholders with your actual IDs:
     ```javascript
     service_id: 'your_service_id',
     template_id: 'your_template_id',
     user_id: 'your_user_id'
     ```

## Option 3: Netlify Forms (If hosting on Netlify)

1. **Add `netlify` attribute to your form:**
   ```html
   <form class="contact-form" id="contactForm" netlify></form>
   ```
2. **Deploy to Netlify - forms will work automatically**

## Current Features

✅ **Multi-backend support** - Tries Formspree first, then EmailJS, then Netlify
✅ **Real-time validation** - Instant feedback as users type
✅ **Professional UI** - Beautiful status messages and loading states
✅ **Error handling** - Graceful fallbacks if one service fails
✅ **Accessibility** - Proper labels and ARIA attributes
✅ **Anti-spam** - Hidden fields and validation
✅ **Mobile responsive** - Works perfectly on all devices

## Quick Setup (5 minutes)

**For immediate functionality:**

1. **Sign up at Formspree.io**
2. **Create a new form with your email**
3. **Copy the form ID (the part after `/f/`)**
4. **Replace `xpwznqnz` in line 2572 of `portfolio.html` with your ID**
5. **Done! Test your form**

## Testing Your Form

1. **Fill out all fields on your contact form**
2. **Click "Send Message"**
3. **You should see a green success message**
4. **Check your email for the message**

## Troubleshooting

**Form not sending?**

- Check your Formspree form ID is correct
- Ensure you're using the correct email in Formspree
- Check browser console for errors

**Getting spam?**

- The form includes anti-spam measures
- Formspree has built-in spam filtering
- You can add reCAPTCHA in Formspree dashboard

**Want to customize?**

- Modify the success/error messages in the JavaScript
- Change the form fields as needed
- Add additional validation rules

## Email Template Example

When someone contacts you, you'll receive an email like:

```
From: John Doe (john@example.com)
Subject: Website Development Inquiry

Hi Adithya,

I'm interested in discussing a potential web development project.
Could we schedule a call this week?

Best regards,
John Doe
```

Your contact form is now production-ready! 🚀
