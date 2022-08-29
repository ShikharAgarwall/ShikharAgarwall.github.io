'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c1e27eba7c3097cad987ccb8ccc5afe7",
"assets/assets/new_images/benefits.png": "006dabaeece08b9474ddceac9392d906",
"assets/assets/new_images/cig_eff.jpg": "0768a501564115a3209574a055c6852f",
"assets/assets/new_images/cig_effects.png": "8ddf0966f4cf01337bcb71ee605b601d",
"assets/assets/new_images/expectations.jpg": "83c868cdf17c9047e5c637b58d329c0a",
"assets/assets/new_images/logo.png": "3cd33f2f7f6a4330695c0585b501c7f1",
"assets/assets/new_images/navy.png": "8d0c64637cc3cc22cb107ac16882bb06",
"assets/assets/new_images/ncc-web.png": "d568738e235436357c0652de7760b253",
"assets/assets/new_images/ncc.png": "cbd175f856e843c0e4aa8e18d349f788",
"assets/assets/new_images/nccimg.png": "66d5619f9ac8f4d9b06134ed88146a34",
"assets/assets/new_images/ncc_nobg.png": "86b10965463ce8dabb2e6e38b47b94f9",
"assets/assets/new_images/nicotine.png": "6e11c444027a64d39dc1c123cddba1e9",
"assets/assets/new_images/nico_2.jpeg": "46787ab75c93e3398d986457180f5f9b",
"assets/assets/new_images/poster1.jpeg": "9c2d81336ccf93ecab771d6b05086cb5",
"assets/assets/new_images/poster10.jpeg": "64ba53e27521d90a00ac9ecb977b00a7",
"assets/assets/new_images/poster11.jpeg": "f916d9d7d93873f616f5a65cbf1a5d69",
"assets/assets/new_images/poster12.jpeg": "4a279d22f6d8f86152a09a02bdb4f9f4",
"assets/assets/new_images/poster13.jpeg": "4a279d22f6d8f86152a09a02bdb4f9f4",
"assets/assets/new_images/poster14.jpeg": "7d7675a860d198c2ee5aafca0267a658",
"assets/assets/new_images/poster15.jpeg": "dd6f89efdba31d57ae09713cf2f193bd",
"assets/assets/new_images/poster16.jpeg": "883d47641b2bc3700ce4b49acc956ec2",
"assets/assets/new_images/poster17.jpeg": "167993c806e8678d0c9760371ce26afe",
"assets/assets/new_images/poster18.jpeg": "014f8f16d91e8d33c2fb2899d55baa8f",
"assets/assets/new_images/poster19.jpeg": "00c448f63e2b695647660a4fcc10329b",
"assets/assets/new_images/poster2.jpeg": "8044fa6e312c5ace737f5837c19a95fc",
"assets/assets/new_images/poster20.jpeg": "c72236b833d1e8b28b71e960e8b2060c",
"assets/assets/new_images/poster21.jpeg": "9c7ecfe7cd42d74d7933184d4bd2ea18",
"assets/assets/new_images/poster22.jpeg": "ce81ed39ece33f4443fa7dbee33a4d6f",
"assets/assets/new_images/poster3.jpeg": "dc3d0db75bb6e49260abce4e112cec76",
"assets/assets/new_images/poster4.jpeg": "8687b810685fadc8c42192d02b74e799",
"assets/assets/new_images/poster5.jpeg": "35145a40ad192018fe0b4e70e740b1b2",
"assets/assets/new_images/poster6.jpeg": "46140e32ba66e9cb9472d51a1f1efcf7",
"assets/assets/new_images/poster7.jpeg": "881d5091afcd2d70b5a2389e2dfd7e25",
"assets/assets/new_images/poster8.jpeg": "81040794e0d6f13e9922617440279e32",
"assets/assets/new_images/poster9.jpeg": "97dd552c03aa84d0988642e5c9e680c2",
"assets/assets/new_images/regi.png": "eb8dc262b425913b3131d6452dfd5430",
"assets/assets/new_images/whatisiot.jpg": "5f7d0a35f46c354346cca0bfc1acdfc8",
"assets/FontManifest.json": "b0b859131b88cedb62b38527145d7da2",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "e1595f272dd5efd38e27df92ee8106e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttericon/lib/fonts/Brandico.ttf": "791921e9b25210e2551b6eda3f86c733",
"assets/packages/fluttericon/lib/fonts/Elusive.ttf": "23f24df0388819e94db2b3c19841841c",
"assets/packages/fluttericon/lib/fonts/Entypo.ttf": "58edfaf27b1032ea4778b69297c02b5a",
"assets/packages/fluttericon/lib/fonts/FontAwesome.ttf": "799bb4e5c577847874f20bd0e9b38a9d",
"assets/packages/fluttericon/lib/fonts/FontAwesome5.ttf": "221b27a41202ddd33990e299939e4504",
"assets/packages/fluttericon/lib/fonts/Fontelico.ttf": "3a1e1cecf0a3eae6be5cba3677379ba2",
"assets/packages/fluttericon/lib/fonts/Iconic.ttf": "34e12214307f5f7cf7bc62086fbf55a3",
"assets/packages/fluttericon/lib/fonts/LineariconsFree.ttf": "276b1d61e45eb9b2dde9482545d9e3ac",
"assets/packages/fluttericon/lib/fonts/Linecons.ttf": "2d0ac407ed11860bf470cb01745fb144",
"assets/packages/fluttericon/lib/fonts/Maki.ttf": "9ecdcd7d24a2461a55d532b86b2740bd",
"assets/packages/fluttericon/lib/fonts/Meteocons.ttf": "8b9c7982496155bb39c67eaf2a243731",
"assets/packages/fluttericon/lib/fonts/MfgLabs.ttf": "09daa533ea11600a98e3148b7531afe3",
"assets/packages/fluttericon/lib/fonts/ModernPictograms.ttf": "5046c536516be5b91c15eb7795e0352d",
"assets/packages/fluttericon/lib/fonts/Octicons.ttf": "7242d2fe9e36eb4193d2bc7e521779bf",
"assets/packages/fluttericon/lib/fonts/RpgAwesome.ttf": "99232001effca5cf2b5aa92cc3f3e892",
"assets/packages/fluttericon/lib/fonts/Typicons.ttf": "3386cae1128e52caf268508d477fb660",
"assets/packages/fluttericon/lib/fonts/WebSymbols.ttf": "4fd66aa74cdc6e5eaff0ec916ac269c6",
"assets/packages/fluttericon/lib/fonts/Zocial.ttf": "c29d6e34d8f703a745c6f18d94ce316d",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "46eccd66dbd71dfcb78a953897b920fc",
"icons/Icon-512.png": "703ed1389dc3417f1d8fa4799fdf3e44",
"index.html": "39237885271bbb75bf1c7ebfca5d820f",
"/": "39237885271bbb75bf1c7ebfca5d820f",
"main.dart.js": "7f9d137271af47928f5133d9ae443272",
"manifest.json": "1a5450cffe74d75ecb465bc5bf56cbdf",
"splash/img/dark-1x.png": "56dd9221b7a51df890280b502304dd48",
"splash/img/dark-2x.png": "29554b5a4c30ffc8e9a98b71b2dcc3b0",
"splash/img/dark-3x.png": "ddcc8e2174bba04dce9411655752a548",
"splash/img/dark-4x.png": "480daf068f4922852466ef91b667289c",
"splash/img/light-1x.png": "56dd9221b7a51df890280b502304dd48",
"splash/img/light-2x.png": "29554b5a4c30ffc8e9a98b71b2dcc3b0",
"splash/img/light-3x.png": "ddcc8e2174bba04dce9411655752a548",
"splash/img/light-4x.png": "480daf068f4922852466ef91b667289c",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "db6178791b6369b77311c0ae92809585",
"styles.css": "b536a4baa886de9679149b653bdaebf5",
"version.json": "e3673eace8cc2abe3f9054c950aef7f1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
