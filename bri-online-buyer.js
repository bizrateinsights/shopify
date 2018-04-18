<script type="text/javascript">
/* ==========================================
| BIZRATE INSIGHTS' BASIC ONLINE BUYER CODE |
--------------------------------------------
RESOURCES:
https://bizrateinsights.com/omni/
https://bizrateinsights.com/buyer-survey-code/
https://github.com/bizrateinsights/shopify

AUTHOR:
James Hach = [{
Email: jameshach@gmail.com,
Website: jameshach.com,
Bizrate Insights: [{
  Email: jhach@bizrate.com,
  Position: Product Manager & Coffee Drinker
}]
}];
*/

  var _cnx = _cnx || [];

  _cnx.push(['mid', ##INSERT_STOREMID_HERE##]);  // your unique store MID
  _cnx.push(['surveyType', 'pos']);
  _cnx.push(['orderId', '{{order.order_number}}']); // Shopify order number
  _cnx.push(['emailAddress', '{{order.email}}']); // Shopify customer email address

  (function (w, d, t) {
    var s = d.createElement(t);
    s.async = true;
    s.src = '//insights.bizrate.com/js/init.js';
    var h = d.getElementsByTagName(t)[0]; h.parentNode.insertBefore(s, h);
  })(window, document, 'script');
</script>
