# USBM - United States Brookhaven Military

A modern, responsive website for the Roblox military group "United States Brookhaven Military" (USBM). This website serves as an official portfolio and recruitment platform for the group.

## Features

- **Responsive Design**: Works on all devices from mobile to desktop
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Sections**:
  - Hero section with call-to-action
  - About section with mission and vision
  - Join Us section with Roblox group link
  - Community section with Discord integration
  - Contact form for inquiries
- **Performance Optimized**: Fast loading times and smooth animations
- **SEO Friendly**: Properly structured for search engines

## Technologies Used

- HTML5
- CSS3 (with CSS Variables for theming)
- JavaScript (Vanilla JS, no dependencies)
- Font Awesome Icons
- Google Fonts (via CDN)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/usbm-portfolio.git
   cd usbm-portfolio
   ```

2. Open `index.html` in your preferred web browser.

## Customization

### Colors

You can easily customize the color scheme by updating the CSS variables in the `:root` selector in `css/styles.css`:

```css
:root {
    --primary: #2c5530;      /* Dark green */
    --secondary: #3a5a40;    /* Medium green */
    --accent: #588157;      /* Light green */
    --light: #f8f9fa;       /* Off-white */
    --dark: #212529;        /* Dark gray */
    --text: #e9ecef;        /* Light text */
    --text-muted: #adb5bd;  /* Muted text */
}
```

### Content

Update the content in `index.html` to reflect your group's information, mission, and values.

### Links

Update the following links in `index.html`:
- Roblox group link in the "Join Us" section
- Discord invite link in the "Community" section
- Social media links in the footer

## Form Submission

The contact form is currently set up for demonstration purposes. To make it functional, you'll need to:

1. Set up a server-side script to handle form submissions
2. Update the form's `action` attribute in `index.html`
3. Configure the form submission handler in `js/script.js`

## Browser Support

This website is compatible with all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 10+)
- Chrome for Android

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Font Awesome](https://fontawesome.com/) for icons
- [Unsplash](https://unsplash.com/) for stock images
- [Google Fonts](https://fonts.google.com/) for typography
