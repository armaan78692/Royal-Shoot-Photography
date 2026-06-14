import wedding1Asset from "@/assets/portfolio-wedding.jpg";
import wedding2Asset from "@/assets/wedding-couple2.jpg";
import heroCoupleAsset from "@/assets/hero-main.jpg";
import heroBrideAsset from "@/assets/wedding-entry.jpg";
import signatureAsset from "@/assets/wedding-couple3.jpg";
import heroMain from "@/assets/hero-main.jpg";
import wedding from "@/assets/couple-pic2.jpg";
import wedding1 from "@/assets/Wedding-4.jpg";
import wedding2 from "@/assets/Wedding-5.jpg";
import wedding3 from "@/assets/Wedding-6.jpg";
import wedding4 from "@/assets/Wedding-7.jpg";
import prewedding from "@/assets/portfolio-prewedding.jpg";
// import event from "@/assets/portfolio-event.jpg";
import fashion from "@/assets/portfolio-fashion.jpg";
import portrait from "@/assets/model4.jpg";
import model1 from "@/assets/model.jpg"
import model2 from "@/assets/model2.jpg"
import model3 from "@/assets/model3.jpg"
import model8 from "@/assets/model8.jpg"
import model5 from "@/assets/model5.jpg"
import model6 from "@/assets/model6.jpg"
import model7 from "@/assets/model7.jpg"
import model9 from "@/assets/model9.jpg"
import model10 from "@/assets/model10.jpg"
import model11 from "@/assets/model11.jpeg"
// import cinematic from "@/assets/portfolio-cinematic.jpg";
import prewedding2 from "@/assets/pre-wedding2.jpeg";
import prewedding3 from "@/assets/Pre-Wedding-3.jpg";
import prewedding4 from "@/assets/pre-wedding4.jpeg";
import prewedding5 from "@/assets/pre-wedding5.jpeg";
import preWedding6 from "@/assets/preWedding3.jpg";
// import portrait2 from "@/assets/portrait2.jpg"
// import portrait3 from "@/assets/portrait3.jpg"
// import couple2 from "@/assets/couple2.jpg"
import birthdayEvent from "@/assets/birthday-event.jpg"
import event1 from "@/assets/event1.jpg"
import event3 from "@/assets/event3.jpg"
import event4 from "@/assets/event4.jpg"
import event5 from "@/assets/event5.jpg"
import event6 from "@/assets/event6.jpg"
import event7 from "@/assets/event7.jpg"
import event8 from "@/assets/event8.jpg"
import event9 from "@/assets/Event-9.jpg"
import event10 from "@/assets/Event-10.jpg"
import event11 from "@/assets/Event-12.jpg"
import event12 from "@/assets/Event-13.jpg"
import event13 from "@/assets/Event-14.jpg"
import weddingGroom from "@/assets/weddingGroom.jpg"
import award1 from "@/assets/award1.jpg"
import award2 from "@/assets/award2.jpg"
import award3 from "@/assets/award3.jpg"
import award4 from "@/assets/award4.jpg"
import award5 from "@/assets/award5.jpg"
import award6 from "@/assets/award6.jpg"
import award7 from "@/assets/Awards-1.jpg"
import award8 from "@/assets/Awards-2.jpg"
import birthday1 from "@/assets/Birthday-1.jpg"
import birthday2 from "@/assets/Birthday-2.jpg"
import birthday3 from "@/assets/Birthday-3.jpg"
import birthday4 from "@/assets/Birthday-4.jpg"
import birthday5 from "@/assets/Birthday-5.jpg"
import birthday6 from "@/assets/Birthday-6.jpg"
import birthday7 from "@/assets/Birthday-7.jpg"
import birthday8 from "@/assets/Birthday-8.jpg"
import birthday9 from "@/assets/Birthday-9.jpg"
import birthday10 from "@/assets/Birthday-10.jpg"
import type { GalleryImage } from "@/components/site/CategoryGallery";

const w1 = wedding1Asset;
const w2 = wedding2Asset;
const hc = heroCoupleAsset;
const hb = heroBrideAsset;
const sc = signatureAsset;

const make = (src: string, alt: string): GalleryImage => ({ src, alt });

export const weddingImages: GalleryImage[] = [
  make(w1, "Sanaya & Arjun — Wedding"),
  make(hb, "Bridal portrait"),
  make(wedding2, "Riya & Rohan — Wedding"),
  make(hc, "Couple portrait"),
  make(preWedding6, "Bridal portrait"),
  make(weddingGroom, "Vows exchanged"),
  make(event7, "Mandap ceremony"),
  make(sc, "Signature couple frame"),
  make(w2, "Reception moments"),
  make(wedding, "Traditional rituals"),
  make(wedding1, "Golden hour couple"),
  make(wedding3, "Bride's quiet moment"),
  make(wedding4, "Bride's quiet moment"),
];

export const preWeddingImages: GalleryImage[] = [

  make(prewedding4, "Editorial pre-wedding"),
  make(prewedding5, "Romance unposed"),
  make(prewedding, "Misty Hills — Coorg"),
  make(prewedding3, "Couple in golden light"),
  make(prewedding2, "Sunset embrace"),

];

export const eventImages: GalleryImage[] = [
  make(event1, "Reception lights"),
  make(event5, "Taj Palace Gala"),
  make(event9, "Stage lighting"),
  make(event6, "Taj Palace Gala"),
  make(event8, "Taj Palace Gala"),
  make(event10, "Crowd moments"),
  make(event3, "Taj Palace Gala"),
  make(event11, "Taj Palace Gala"),
  make(event12, "Taj Palace Gala"),
  make(event13, "Taj Palace Gala"),
];

export const fashionImages: GalleryImage[] = [
  make(fashion, "Editorial — Noir"),
  make(portrait, "Studio fashion"),
  make(model1, "Designer wear"),
  make(model3, "High fashion"),
  make(model5, "Couture portrait"),
  make(model8, "Avant-garde"),
  make(model9, "Lookbook frame"),
  make(model10, "Glow editorial"),
  make(model11, "Campaign shot"),
  make(model6, "Moody silhouette"),
  make(model2, "Bridal couture"),
];

export const portraitImages: GalleryImage[] = [     //Birthday Section
  make(birthday1, "Window Light Study"),
  make(birthday2, "Couple portrait"),
  make(birthday6, "Outdoor portrait"),
  make(birthday3, "Quiet portrait"),
  make(birthday4, "Soft daylight"),
  make(birthday7, "Family frame"),
  make(birthday5, "Studio close-up"),
  make(birthday8, "Bridal beauty"),
  make(birthday9, "Quiet portrait"),
  make(birthdayEvent, "Black & white study"),
  make(birthday10, "Headshot session"),
 
];

export const cinematicImages: GalleryImage[] = [        //Award Section
  make(award1, "Behind the Frame"),
  make(award2, "Cinematic still"),
  make(award3, "Film grain love"),
  make(award4, "Anamorphic frame"),
  make(award7, "Romantic cut"),
  make(award5, "Slow motion moment"),
  make(award8, "Romantic cut"),
  make(award6, "Romantic cut"),
];
