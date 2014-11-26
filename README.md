# nodeExpress

Minimal integration of COPYandPAY using node.js with express and jade.

## Getting started
#### Download the nodeExpress project from github (https://github.com/PAYON-AG/COPYandPAY, Click Download Zip)
2.	Download and install node.js http://nodejs.org/
3.	Open your console and navigate to .../.../nodeExpress
4.	Enter: node app.js
5.	Your sever starts and listen to port 3000
6.	You should be able to access
	1.	http://localhost:3000/checkout
	2.	http://localhost:3000/result
	
## Start editing
#### Open the integration guide http://www.paysourcing.com/Integrationguide/COPYandPAY.html
2.	routes/index.js (backend, request a token and request the status of payment)
3.	views/checkout.jade (frontend, integrate COPYandPAY checkout)
	2. Don't add tabs, whitespace at the beginning of each line
4.	views/result.jade (frontend, display the result)
	2. Don't add tabs, whitespace at the beginning of each line

## Once you are done
1.	Visa and Master are shown at the checkout page
2.	A payment is done with Visa, eg. Name: use your name, Number:4200 0000 0000 0000, CVV:123, Expiry date 12/2014
3.	The result page displays the result based on the json response

## Tools
- node.js (nodejs.org)
- Web application framework express (expressjs.com)
- Template Engine jade (jade-lang.com)
