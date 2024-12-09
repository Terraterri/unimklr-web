import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <Main />
                <NextScript />
                {/* Custom JS files */}
                <script
                    async
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                ></script>
                {/* theme js */}
                <script async src="/js/scripts.js"></script>
                {/* startbootstrap forms */}
                <script
                    async
                    src="https://cdn.startbootstrap.com/sb-forms-latest.js"
                ></script>
                {/* <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&libraries=places&v=weekly"
          defer
        ></script> */}
            </body>
        </Html>
    );
}
