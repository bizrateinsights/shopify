# Shopify Integration with Bizrate Insights' Voice of Customer Solutions

## Online Buyer Survey Solution
Bizrate Insights’ Online Buyer Survey Solution generates actionable Insights to improve your website's performance by understanding the voice of your customer and their online experience.

To begin collecting the Voice of the Customer through Bizrate Insights' Online Buyer Survey Solutions, merchants must place Bizrate Insights' asynchronous JavaScript code on their Shopify order confirmation page. This will immediately allow you to collect feedback from customers who complete their purchase on your Shopify website.

Once a survey is live, data collection begins and results are available in real-time by accessing Bizrate Insights’ online portal, *[VitalSigns](https://vitalsigns.bizrate.com/login?ref=github)*

---

### Installation Instructions:

**Shopify Checkout Script**
  * Access the **Checkout** settings page by going to Admin > Settings > Checkout in your Shopify store
  * Copy and paste the javascript **code below** with your MID into "Additional scripts"
  * Save

You can also download the *[javascript file](https://github.com/bizrateinsights/shopify/blob/master/bri-online-buyer.js)*, which contains the basic code.

```javascript
/* ==========================================
| BIZRATE INSIGHTS' BASIC ONLINE BUYER CODE |
----------------------------------------- */
<script type="text/javascript">
  var _cnx = _cnx || [];

  _cnx.push(['mid', ##INSERT_STOREMID_HERE##]);  // your unique store MID
  _cnx.push(['surveyType', 'pos']);
  _cnx.push(['pageId', 'orderConfirmation']);
  _cnx.push(['orderId', '{{order.order_number}}']); // Shopify - order number
  _cnx.push(['emailAddress', '{{order.email}}']); // Shopify - customer email address
  _cnx.push(['customerId', '{{customer.id}}']); // Shopify - customer id
  _cnx.push(['zip', '{{billing_address.zip}}']); // Shopify - customer's billing zip
  _cnx.push(['cartTotal', '{{order.total_price | money_without_currency}}']); // Shopify - Customer's cart total
  _cnx.push(['couponApplied', '']);
  _cnx.push(['webAnalyticsId', '']);
  _cnx.push(['referrerPage', '']);
  _cnx.push(['referrerUrl', '']);

  (function (w, d, t) {
    var s = d.createElement(t);
    s.async = true;
    s.src = '//insights.bizrate.com/js/init.js';
    var h = d.getElementsByTagName(t)[0]; h.parentNode.insertBefore(s, h);
  })(window, document, 'script');
</script>
```

  * Place a test order
  * Review, Test, Done :)

---

## Maximize the Voice of Online Buyers + Seller Ratings Syndication
Bizrate Insights’ default invitation settings on the order confirmation page utilize our best practices to optimize response rates, yielding an average of 12% for the Online Buyer Survey.  Survey responses power Seller Ratings via syndication to partners like Google, Bing, and more.

In addition to the data collected on-site, buyers who did not initially respond can be invited to provide feedback via Bizrate Insights’ Second Chance Email.  This survey mirrors the online buyer and fulfillment surveys, but is emailed only to those who did not respond online.  The necessary variables (customer’s order ID & email address) are included in the basic code. This solution is quick-to-launch with a low integration cost.

**Important Note:** Bizrate Insights is committed to protecting customer privacy and will not store, rent, sell, or use customer email addresses provided to us by merchants for any purpose other than to send initial and reminder email survey invitations.  These customer email addresses are deleted from the database once the survey invitations are emailed.

## Control to Customize
We are constantly testing the latest tech to fully optimize the experience and shape the usability of our default invitation for all screen sizes.  This ensures your customer’s experience with Bizrate Insights’ solutions is optimized across all desktop, tablet, and mobile screens.  There are several ways to customize the Online Buyer Survey invitations without ever changing the code on your website.  We make this simple by granting you access to a tool within VitalSigns to control the survey invitation experience for desktop, tablet, and mobile screens.  While this interface is under development, please *[contact us](mailto:bizrateinsights@bizrate.com?Subject=Survey_Invitation_Customizations_Inquiry)*, or your account manager, to update on your behalf.

Online Buyer customizations include:

  *	position of the invitation on your webpage – defaults centered in the browser window
  *	invitation look & design – default displays 500 x 455 pop-up window
---

## Online Buyer Survey Solution (Advanced Setup)
By configuring and including optional code snippets, you generate further actionable Insights to improve your website's performance by understanding your customer's experience.  You are encouraged to include all optional passed-in data.  Additional reporting options, which may incur a fee, include:

  * products purchased to analyze and aggregate customer purchasing behavior
  * referring URL tracking to identify all online properties sending your website traffic
  * Quick Response to Online Buyers who wish to be contacted regarding their order
  * customer identification assigned by you including customer ID & web analytics ID

The *[bri-online-buyer.js](https://github.com/bizrateinsights/shopify/blob/master/bri-online-buyer.js)* file will always contain the latest snippets.

---

## Resources
  * https://bizrateinsights.com/omni
  * https://bizrateinsights.com/buyer-survey-code/
