"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import FeatureCardSixteen from "@/components/sections/feature/FeatureCardSixteen";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TeamCardFive from "@/components/sections/team/TeamCardFive";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBase from "@/components/sections/footer/FooterBase";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import { Sparkles, ShoppingBag, ArrowUpRight, Shirt, Zap, Tag, Star, Award, Users, Info, ShieldCheck, Truck } from "lucide-react";

export default function WebAgency2Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="metallic"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <ReactLenis root>
        <NavbarLayoutFloatingOverlay
          brandName="Aine"
          navItems={[
            { name: "New Arrivals", id: "collections" },
            { name: "Shop All", id: "shop" },
            { name: "Our Story", id: "about" },
            { name: "Support", id: "contact" },
          ]}
          button={{ text: "Shop Now", href: "#shop" }}
        />
        <HeroSplitDoubleCarousel
          title="Timeless Apparel for the Modern Minimalist"
          description="Elevate your everyday wardrobe with Aine. Discover ethically sourced, premium materials crafted for comfort and enduring style."
          tag="Autumn Collection 2025"
          tagIcon={ShoppingBag}
          tagAnimation="slide-up"
          background={{ variant: "canvas-reveal" }}
          buttons={[
            { text: "Explore Collection", href: "#shop" },
            { text: "Read Our Story", href: "#about" },
          ]}
          buttonAnimation="slide-up"
          carouselPosition="right"
          leftCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/woman-holding-credit-card-working-laptop_23-2148304900.jpg", imageAlt: "Minimalist apparel set" },
            { imageSrc: "http://img.b2bpic.net/free-photo/close-up-fabric-texture-detail_23-2151925992.jpg", imageAlt: "Soft texture fabric detail" },
            { imageSrc: "http://img.b2bpic.net/free-photo/trendy-colour-swatches-collage_23-2149901817.jpg", imageAlt: "Neutral tone aesthetic" },
            { imageSrc: "http://img.b2bpic.net/free-photo/front-view-women-sweaters-jeans-posing-window-shadow_23-2149296209.jpg", imageAlt: "Sustainable clothing focus" },
          ]}
          rightCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/front-view-underground-hip-hop-musician_23-2150932912.jpg", imageAlt: "Urban fashion photography" },
            { imageSrc: "http://img.b2bpic.net/free-photo/woman-walking-white-blouse-terracotta-pants-minimalist-setting_24972-2967.jpg", imageAlt: "Layered outfits" },
            { imageSrc: "http://img.b2bpic.net/free-photo/black-woman-trench-coat-dancing-sunlight_197531-19718.jpg", imageAlt: "Casual luxury wear" },
          ]}
          carouselItemClassName="!aspect-[4/5]"
        />
        <FeatureBento
          title="Curated Collections"
          description="High-quality essentials designed to last a lifetime, not just a season."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          buttons={[{ text: "View Store", href: "#shop" }]}
          buttonAnimation="slide-up"
          features={[
            {
              title: "Eco-Friendly Fabrics",              description: "We source only organic cotton, linen, and recycled fibers.",              bentoComponent: "reveal-icon",              icon: ShieldCheck,
            },
            {
              title: "Modern Silhouettes",              description: "Clean lines and timeless fits for everyday wear.",              bentoComponent: "media-stack",              items: [
                { imageSrc: "http://img.b2bpic.net/free-photo/fashionable-young-caucasian-woman-posing_273609-14657.jpg", imageAlt: "Classic tee" },
                { imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-relaxing-outdoors-with-coffee_23-2148682676.jpg", imageAlt: "Relaxed trousers" },
                { imageSrc: "http://img.b2bpic.net/free-photo/close-up-neatly-folded-knitted-items-pastel-color_169016-18129.jpg", imageAlt: "Layering pieces" },
              ],
            },
            {
              title: "Global Delivery",              description: "Free worldwide shipping on all orders over $150.",              bentoComponent: "reveal-icon",              icon: Truck,
            },
          ]}
        />
        <FeatureCardTwentySix
          title="Editor's Favorites"
          description="The must-have pieces currently topping our bestseller charts."
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "See All Products", href: "#shop" }]}
          buttonAnimation="slide-up"
          cardClassName="!h-auto aspect-video"
          features={[
            {
              title: "The Essential Tee",              description: "Our signature organic cotton classic.",              imageSrc: "http://img.b2bpic.net/free-photo/woman-model-demonstrating-cloths_1303-30994.jpg",              buttonIcon: ArrowUpRight,
              buttonHref: "#"
            },
            {
              title: "Relaxed Trousers",              description: "Perfect fit, comfort all day long.",              imageSrc: "http://img.b2bpic.net/free-photo/cute-woman-holding-book-outside_23-2148396305.jpg",              buttonIcon: ArrowUpRight,
              buttonHref: "#"
            },
            {
              title: "Signature Knitwear",              description: "Soft, breathable, and elegant.",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-sensual-blond-girl-knitted-sweater-emotionally-posing-outdoor_574295-4018.jpg",              buttonIcon: ArrowUpRight,
              buttonHref: "#"
            },
            {
              title: "Linen Outerwear",              description: "Lightweight layers for every season.",              imageSrc: "http://img.b2bpic.net/free-photo/blonde-woman-coat-outside-park-using-phone_1303-14689.jpg",              buttonIcon: ArrowUpRight,
              buttonHref: "#"
            }
          ]}
        />
        <TestimonialCardFifteen
          testimonial="The quality of fabric from Aine is unmatched. It feels like luxury, fits perfectly, and is so easy to care for."
          rating={5}
          author="— Chloe D., Lifestyle Creator"
          avatars={[{ src: "http://img.b2bpic.net/free-photo/close-up-portrait-cheerful-woman-white-coat-her-hair-open-air-terrace_291650-1008.jpg", alt: "Chloe D" }]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
        <MetricCardOne
          title="The Aine Standard"
          description="We don't just sell clothes, we build a better way to dress."
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            { id: "quality", value: "100%", title: "Ethically Made", description: "Traceable materials and labor", icon: Tag },
            { id: "satisfaction", value: "5k+", title: "Happy Customers", description: "Growing community of minimalists", icon: Users },
            { id: "years", value: "100%", title: "Comfort Guaranteed", description: "If you don't love it, we'll return it", icon: Star },
          ]}
        />
        <FeatureCardSixteen
          title="Why Choose Aine"
          description="Superior quality meets ethical practices."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          negativeCard={{
            items: [
              "Fast fashion waste and trends",              "Uncomfortable synthetic materials",              "Poor labor practices",              "Difficult return processes",              "Lack of transparency"],
          }}
          positiveCard={{
            items: [
              "Slow, sustainable fashion ethics",              "Premium, natural breathable fibers",              "Fair trade manufacturing",              "Hassle-free 30-day returns",              "Complete supply chain transparency"],
          }}
        />
        <FaqBase
          title="Common Inquiries"
          description="Get answers about our shipping, materials, and sizing."
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            { id: "1", title: "How do I find my size?", content: "Consult our detailed size guide on each product page. Our fits are designed to be true to size." },
            { id: "2", title: "Do you ship internationally?", content: "Yes! We deliver to over 100 countries globally." },
            { id: "3", title: "What is your return policy?", content: "We offer a 30-day return policy on all unworn items in original packaging." },
            { id: "4", title: "Are the materials organic?", content: "We prioritize organic and recycled natural fibers across all collections." },
          ]}
        />
        <ContactCTA
          tag="Join the Waitlist"
          title="Get Early Access to New Drops"
          description="Be the first to hear about our limited edition collections and subscriber-only offers."
          background={{ variant: "rotated-rays-animated" }}
          buttons={[
            { text: "Join Newsletter", href: "#" },
            { text: "Browse New Arrivals", href: "#shop" },
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
        <FooterBase
          logoText="Aine"
          copyrightText="© 2025 | Aine Brand Store"
          columns={[
            {
              title: "Shopping",              items: [
                { label: "New Arrivals", href: "#" },
                { label: "Best Sellers", href: "#" },
                { label: "Our Story", href: "#" },
                { label: "Support", href: "#" },
              ],
            },
            {
              title: "Policy",              items: [
                { label: "Shipping", href: "#" },
                { label: "Returns", href: "#" },
                { label: "Privacy", href: "#" },
                { label: "Terms", href: "#" },
              ],
            },
            {
              title: "Social",              items: [
                { label: "Instagram", href: "#" },
                { label: "Pinterest", href: "#" },
                { label: "Facebook", href: "#" },
                { label: "TikTok", href: "#" },
              ],
            },
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
