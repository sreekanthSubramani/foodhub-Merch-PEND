import adsl from './adsl.webp'
import ethernet from './cable.webp'
import voipCaller from './callerID.webp'
import comet from './callerId1.webp'
import cashDrawer from  './cashDrawer1.webp'
import largeUniversal from './deliverybag.webp'
import dualScreen from './epos1.webp'
import epos from './epos2.webp'
import kioskHanger from './kiosk1.webp'
import kioskStand from './kiosk2.webp'
import m2 from './onlineOrdering.webp'
import m21 from './onlineOrdering2.webp'
import tablet from './onlineOrderingTab.webp'
import printer from './printer2.webp'
import printerRollSize from './printer3.webp'
import printerRoll1 from './printerRoll1.webp'
import printerRoll2 from './printerRoll2.webp'
import smallBag from './smDelivery.webp'
import threeWaySplitter from './splitter.webp'
import foodhubLogo from './foodhub-logo.png'
import mediumDeliveryBag from './medDelBag.webp'
import headerImage from './headerImage.png'
import kitchenScreen from './kitchenScreen.avif'

export const assets = {
    adsl,
    ethernet,
    voipCaller,
    comet,
    cashDrawer,
    largeUniversal,
    dualScreen,
    epos,
    kioskHanger,
    kioskStand,
    mediumDeliveryBag,
    m2,
    m21,
    tablet,
    printer,
    printerRoll1,
    printerRoll2,
    printerRollSize,
    smallBag,
    threeWaySplitter,
    foodhubLogo,
    headerImage,
    kitchenScreen
}

export const cover_list =[
    {
        category_name : "Delivery Bags",
        category_image : mediumDeliveryBag
    },
    {
        category_name : "Rolls",
        category_image : printerRoll1
    },
    {
        category_name : "POS Device",
        category_image : epos
    },
    {
        category_name :  "Printers",
        category_image : printer
    },
    {
        category_name : "Kitchen Screen",
        category_image : kitchenScreen
    }
    
]

export const productDetails = [
    {
        id: 1,
        category: "Delivery Bags",
        name :"Large Universal Delivery Bag",
        image :  largeUniversal,
        description : ["Bag Measurements: External: 45 (W) x 35 (H) x 40 (D) cm Capacity: 50 litres ","Thick foam for extra insulation & maintain temperature. Foil lined to help temperature maintenance & easy wipe clean","Durable Velcro closure on three sides of the bag Plastic sleeve on lid for customer orders/receipts","Ideal for chilled food, frozen foods or meals delivery" ],
        price : 11.49
    },
    {
        id: 2,
        category: "Delivery Bags",
        name :"Small Pizza Delivery Bag",
        image :  smallBag,
        description : ["COMMERCIAL SIZE: 48 (W) x 20 (H) x 58 (D) cm holds from `12 - 16` pizza boxes. CAPACITY:  46 litres and heavy-duty for food delivery, grocery store and commercial transportation.","THICK INSULATION: 2-layer EPE interior insulated lining, Keep food hot or cold, Maintain temperature for more hours.","ID WINDOW: Large clear see-through ticket window on top to hold business cards, menus, receipts or order tickets" ],
        price : 11.49
    },
    {
        id: 3,
        category: "Delivery Bags",
        name :"Large Pizza Delivery Bag",
        image :  mediumDeliveryBag,
        description : [`COMMERCIAL SIZE: 54 (W) x 20 (H) x 64 (D) cm holds from 12" - 20" pizza boxes. CAPACITY:  and heavy-duty for food delivery, grocery store and commercial transportation..`,"THICK INSULATION: 2-layer EPE interior insulated lining, Keep food hot or cold, Maintain temperature for more hours.","ID WINDOW: Large clear see-through ticket window on top to hold business cards, menus, receipts or order tickets." ],
        price : 11.49
    },
    {
        id: 4,
        category: "Online Ordering",
        name :"Foodhub M2 Device",
        image :  m2,
        description : ["Experience the convenience of Foodhub M-Pro, a handheld online ordering device that lets you process orders with just a few taps on the touch screen. USB-C port offers fast, hassle-free charging. Print receipts to keep track of transactions with ease. Revolutionize your restaurant business with FoodHub M-Pro, the ultimate resource for streamlined ordering!" ],
        price : 109.02
    },
    {
        id: 5,
        category: "Online Ordering",
        name :"Foodhub Takeaway All In One EPOS",
        image :  epos,
        description : ["Unlock the power of business management with the Foodhub POS. With its easy-to-use interface, you'll experience an effortless transition to improved efficiency. Enjoy the convenience of in-built Seiko printer, a large HD screen, and various connection options including USB, LAN, and a cash drawer connection. Plus, enjoy the feature of WiFi compatibility. Upgrade your business today with the Foodhub All in One EPOS.", "80mm built in thermal printer","1.2KW speaker","USB connection","Lan connection","Thermal roll included","Power adapter included" ],
        price : 400.65
    },    
    {
        id: 6,
        category: "Online Ordering",
        name :"Foodhub Takeaway All In One EPOS Dual Screen",
        image :  dualScreen,
        description : ["Unlock the power of business management with the Foodhub POS. With its easy-to-use interface, you'll experience an effortless transition to improved efficiency. Enjoy the convenience of in-built Seiko printer, a large HD screen, and various connection options including USB, LAN, and a cash drawer connection. Plus, enjoy the feature of WiFi compatibility. Upgrade your business today with the Foodhub All in One EPOS.", "80mm built in thermal printer","1.2KW speaker","USB connection","Lan connection","Thermal roll included","Power adapter included",`Back facing 10.1" customer screen` ],
        price : "465.00"
    },
    {
        
        id: 7,
        category: "Caller ID",
        name :"Foodhub VOIP Caller ID",
        image :  voipCaller,
        description : ["The VoIP Caller ID is a hardware device that connects to our systems via USB port. It decodes incoming call numbers from your VoIP line and sends them to our systems which makes easy way to handle calls." ],
        price : 66.67
    }, 
    {
        
        id: 8,
        category: "Caller ID",
        name :"Foodhub VOIP Caller ID",
        image :  comet,
        description : ["The Caller ID is a hardware device that connects to your PC's USB port. It decodes incoming call numbers from the telephone line and sends them to your PC via a virtual COM Port, enabling you to quickly and easily create a call management solution without additional software. This device provides a reliable and secure Caller ID solution." ],
        price : "62.50"
    },
    {
        
        id: 9,
        category: "Online Ordering",
        name :"Foodhub PDQ PRO device",
        image :  m21,
        description : ["Experience the convenience of Foodhub PDQ, a handheld online ordering device that lets you process orders with just a few taps on the touch screen. Print receipts to keep track of transactions with ease. Revolutionize your restaurant business with Foodhub PDQ —the ultimate resource for streamlined ordering! You can also accept card payments using this device by inserting the card and using contactless." ],
        price : 281.75

    }
    
    
    


]