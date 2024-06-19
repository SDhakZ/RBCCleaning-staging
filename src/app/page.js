import Home from "./(routes)/home/home";

export default function page() {
  const hcaptcha_site_key = process.env.HCAPTCHA_SITE_KEY;
  return (
    <h1>
      <Home hcaptcha_site_key={hcaptcha_site_key} />
    </h1>
  );
}
