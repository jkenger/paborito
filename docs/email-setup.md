# Email Setup Guide

This guide covers setting up email functionality for the Paborito website forms.

## Overview

The website uses [Resend](https://resend.com) to send form submission emails:
- **Contact Form** → sends to `CONTACT_EMAIL`
- **Partner Application Form** → sends to `PARTNER_EMAIL`

---

## Quick Start (Development)

1. Create a free account at [resend.com](https://resend.com)
2. Go to **API Keys** → Create a new key
3. Create `.env.local` in the project root:

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=your-resend-signup-email@gmail.com
PARTNER_EMAIL=your-resend-signup-email@gmail.com
```

4. Run the dev server and test the forms

> **Note:** In development, emails can only be sent to the email address you signed up with.

---

## Production Setup

### Step 1: Verify Your Domain in Resend

1. Go to [Resend Dashboard](https://resend.com/domains) → **Domains** → **Add Domain**
2. Enter your domain: `paborito.ph`
3. Resend will provide DNS records to add

### Step 2: Add DNS Records

Add these records where your domain is registered (GoDaddy, Namecheap, Cloudflare, etc.):

| Type | Name | Value |
|------|------|-------|
| TXT | `@` or `paborito.ph` | SPF record from Resend |
| TXT | `resend._domainkey` | DKIM record from Resend |

> DNS propagation can take 5 minutes to 48 hours.

### Step 3: Verify in Resend

Click **Verify** in the Resend dashboard. Once verified, you can send from any `@paborito.ph` address.

### Step 4: Set Up Receiving Emails

Form submissions need to go somewhere the client can read them. Options:

**Option A: Google Workspace** (Recommended)
- ~$6/user/month
- Professional email at `@paborito.ph`
- Includes Gmail, Drive, etc.

**Option B: Zoho Mail**
- Free tier available (up to 5 users)
- Good budget option

**Option C: Use Existing Email**
- Forward to client's existing Gmail/email
- Simple, no extra cost

### Step 5: Update Environment Variables

```env
# Resend API Key
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx

# Sender (your verified domain)
EMAIL_FROM=Paborito <noreply@paborito.ph>

# Recipients (must be real mailboxes)
CONTACT_EMAIL=info@paborito.ph
PARTNER_EMAIL=sales@paborito.ph
```

---

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `RESEND_API_KEY` | Your Resend API key | `re_123abc...` |
| `EMAIL_FROM` | Sender address (needs verified domain) | `Paborito <noreply@paborito.ph>` |
| `CONTACT_EMAIL` | Receives contact form submissions | `info@paborito.ph` |
| `PARTNER_EMAIL` | Receives partner applications | `sales@paborito.ph` |

---

## Email Templates

Both forms send nicely formatted HTML emails:

**Contact Form Email:**
- Subject: `New Contact Inquiry from [Name]`
- Contains: Name, email, phone (optional), message
- Reply-To set to sender's email

**Partner Application Email:**
- Subject: `New [Type] Application: [Name]`
- Contains: Partner type, full name, address, contact, distribution area, notes
- Reply-To set to applicant's email

---

## Troubleshooting

### Emails not sending?
1. Check `RESEND_API_KEY` is correct
2. Check Resend dashboard for errors
3. In dev, you can only send to your signup email

### Domain not verifying?
1. Double-check DNS records match exactly
2. Wait for DNS propagation (up to 48 hours)
3. Try the "Verify" button again in Resend

### Not receiving emails?
1. Check spam/junk folder
2. Verify `CONTACT_EMAIL` / `PARTNER_EMAIL` are correct
3. Test with a different email address

---

## API Routes

| Route | Method | Purpose |
|-------|--------|---------|
| `/api/contact` | POST | Handle contact form |
| `/api/partner-application` | POST | Handle partner applications |

---

## Resources

- [Resend Documentation](https://resend.com/docs)
- [Resend Domain Setup](https://resend.com/docs/dashboard/domains/introduction)
- [Google Workspace Setup](https://workspace.google.com/)
- [Zoho Mail](https://www.zoho.com/mail/)
