# Django Allauth Authentication System

A complete authentication system built with Django and django-allauth library.

## 🚀 Features

-  Email/Password Authentication
-  Email Verification (Mandatory)
-  Password Reset via Email
-  Google OAuth Login
-  Facebook OAuth Login
-  Social Account Connections
-  Custom Email Templates
-  Custom Error Messages
-  Toast Notifications
-  Responsive Bootstrap UI

---

## 🛠️ Tech Stack

| Technology | Version |
|---|---|
| Python | 3.12 |
| Django | 6.0 |
| django-allauth | Latest |
| Bootstrap | 5.3 |
| SQLite | 3 |
| Gmail SMTP | — |

---

## ⚙️ Installation

### 1 — Clone the repository:
```bash
git clone https://github.com/mwaqaskhan2002/django-allauth-authentication.git
cd django-allauth-authentication
```

### 2 — Create Virtual Environment:
```bash
python -m venv venv
venv\Scripts\activate   # Windows
source venv/bin/activate # Mac/Linux
```

### 3 — Install Dependencies:
```bash
pip install -r requirement.txt
```

### 4 — Create `.env` file:
```
SECRET_KEY=your_django_secret_key

# Gmail SMTP
EMAIL_HOST_USER=your@gmail.com
EMAIL_HOST_PASSWORD=your_app_password

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Facebook OAuth
FACEBOOK_CLIENT_ID=your_facebook_app_id
FACEBOOK_CLIENT_SECRET=your_facebook_app_secret
```

### 5 — Migrate:
```bash
python manage.py migrate
```

### 6 — Create Superuser:
```bash
python manage.py createsuperuser
```

### 7 — Run Server:
```bash
python manage.py runserver
```

---

## 🔐 Environment Variables

| Variable | Description |
|---|---|
| `SECRET_KEY` | Django Secret Key |
| `EMAIL_HOST_USER` | Gmail Address |
| `EMAIL_HOST_PASSWORD` | Gmail App Password |
| `GOOGLE_CLIENT_ID` | Google OAuth Client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth Secret |
| `FACEBOOK_CLIENT_ID` | Facebook App ID |
| `FACEBOOK_CLIENT_SECRET` | Facebook App Secret |

---

## 📧 Email Templates

| Template | Description |
|---|---|
| `password_reset_key` | Password Reset Email |
| `email_confirmation_signup` | Email Verification |
| `account_already_exists` | Duplicate Email |
| `unknown_account` | Unregistered Email |

---

## 🌐 Auth URLs

| URL | Description |
|---|---|
| `/accounts/login/` | Login |
| `/accounts/signup/` | Signup |
| `/accounts/logout/` | Logout |
| `/accounts/password/reset/` | Forgot Password |
| `/accounts/confirm-email/` | Email Verification |
| `/accounts/social/connections/` | Social Connections |

---

## 👤 Social Auth Setup

### <img src="https://cdn.simpleicons.org/google" width="20" height="20"> Google:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Navigate to **APIs & Services** → **Credentials**
4. Click **Create Credentials** → **OAuth Client ID**
5. Select **Web Application**
6. Add Authorized Redirect URI:
```
   http://127.0.0.1:8000/accounts/google/login/callback/
```
7. Copy **Client ID** and **Client Secret**
8. Add via Django Admin at `http://127.0.0.1:8000/admin/`:
   - Go to **Social Applications** → **Add**
   - Provider: `Google`
   - Name: `Google`
   - Client ID: `your_client_id`
   - Secret Key: `your_client_secret`
   - Sites: `127.0.0.1:8000` → move to **Chosen Sites**
   - Click **Save**

---

### <img src="https://cdn.simpleicons.org/facebook/1877F2" width="20" height="20"> Facebook:

1. Go to [Meta Developer Portal](https://developers.facebook.com/)
2. Click **My Apps** → **Create App**
3. Select **Authenticate and request data from users**
4. Click **Add use cases** → Select **Facebook Login** → **Customize**
5. Go to **App Settings** → **Advanced**
6. Add Authorized Callback URL:
```
   http://localhost:8000/accounts/facebook/login/callback/
```
7. Go to **App Settings** → **Basic**
8. Add the following:
```
   App Domains: localhost
   Site URL:    http://localhost:8000
```
9. Copy **App ID** and **App Secret**
10. Add via Django Admin at `http://127.0.0.1:8000/admin/`:
    - Go to **Social Applications** → **Add**
    - Provider: `Facebook`
    - Name: `Facebook`
    - Client ID: `your_app_id`
    - Secret Key: `your_app_secret`
    - Sites: `127.0.0.1:8000` → move to **Chosen Sites**
    - Click **Save**

> ⚠️ Facebook does NOT allow `127.0.0.1` — always use `localhost`!

> ⚠️ Facebook app must be in **Development Mode** for local testing.

---

### ⚠️ Important Notes:

| Provider | Local URL | Production URL |
|---|---|---|
| **Google** | `http://127.0.0.1:8000` | `https://yourdomain.com` |
| **Facebook** | `http://localhost:8000` | `https://yourdomain.com` |

> ⚠️ For production, always use `HTTPS` URLs in all OAuth providers!

> ⚠️ Use either `.env` OR Django Admin for credentials — **not both**! Using both will cause `MultipleObjectsReturned` error!

---

## 👨‍💻 Author

**Muhammad Waqas Khan**
