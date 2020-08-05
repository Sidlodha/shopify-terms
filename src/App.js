import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ fontSize: "18px" }}>
          <h1>Uplara Privacy Policy</h1>
        </p>
        <div style={{ padding: "3% 10% 10% 10%" }}>
          <h2>
            We empower merchants to provide the best sizing experience for their
            consumers. First, we allow them to make their sizing charts. Second,
            we allow consumers to enter in the brand of their favorite garment
            and use that to recommend sizing in current brand. This Privacy
            Policy describes how personal information is collected, used, and
            shared when you install or use the App in connection with your
            Shopify-supported store.
          </h2>
          <br />
          <br />
          <h3>Personal Information the App Collects</h3>
          <br />
          <br />
          When you install the App, we are automatically able to access certain
          types of information from your Shopify account:
          <ul>
            <li>
              Shop API (GET /admin/api/2020-04/shop.json) - For retrieving the
              shop's domain, myshopify_domain and email
            </li>
            <li>
              Product API (GET /admin/api/2020-04/products.json) - For
              retrieving the list of products
            </li>
            <li>
              ScriptTag API (POST /admin/api/2020-04/script_tags.json) - For
              creating a new ScriptTag for the store
            </li>
          </ul>
          <br />
          <br />
          Additionally, we collect the following types of personal information
          from you and/or your customers once you have installed the App:
          <br />
          <ul>
            <li>
              Local storage on merchant : We have a small token we store to
              authenticate the user.
            </li>
            <li>
              Local storage on consumer : In this token, we keep some state so
              if the user goes to a different product, they don't have to
              re-enter the form. This local storage does not leave the
              consumer's device.
            </li>
          </ul>
          <br />
          <br />
          <h3>How Do We Use Your Personal Information?</h3>
          <br />
          <br />
          We use the personal information we collect from you and your customers
          in order to provide the Service and to operate the App.
          <br />
          <br />
          Changes We may update this privacy policy from time to time in order
          to reflect, for example, changes to our practices or for other
          operational, legal or regulatory reasons.
          <br />
          <br />
          <h3>
            Contact Us For more information about our privacy practices, if you
            have questions, or if you would like to make a complaint, please
            contact us by e-mail at <email>rohan@uplara.com</email> or by mail
            using the details provided below:
          </h3>
          <p>Rohan Mahajan</p>
          <p>
            Email: <email>rohan@uplara.com</email>
          </p>
          <p>Address: 23605 Oak valley road Cupertino CA 95014</p>
        </div>
      </header>
    </div>
  );
}

export default App;
