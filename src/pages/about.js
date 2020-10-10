import React from "react"
import SEO from "../components/SEO"
import Title from "../components/Title"

const AboutPage = () => {
  return (
    <>
      <SEO title="About" description="about webdev" />
      <Title title="french bulldog" />
      <section className="about-page">
        <div className="section-center">
          <article className="about-text">
            <h3>History</h3>
            <p>
              In the mid-1800s, a toy-size Bulldog found favor in some English
              cities, including Nottingham, then a center for lace making. The
              toy Bulldog became something of a mascot for Nottingham’s lace
              makers. This was the height of the Industrial Revolution in
              England, and such “cottage industries” as lace making were
              increasingly threatened. Many in the lace trade relocated to
              northern France, and of course, they brought their toy Bulldogs
              with them. The little dogs became popular in the French
              countryside where lace makers settled. Over a span of decades, the
              toy Bulldogs were crossed with other breeds, perhaps terriers and
              Pugs, and, along the way, developed their now-famous bat ears.
              They were given the name Bouledogue Français. Paris eventually
              discovered the delightful new breed, and thus began the Frenchie’s
              reputation as city dog par excellence. The breed came to be
              associated with Paris café life, and with the bon vivants and
              fancy ladies who sought nocturnal pleasures in Parisian
              dancehalls. Edgar Degas and Toulouse-Lautrec depicted the Frenchie
              in paintings of the Paris demimonde. By the end of the 19th
              century, the Frenchie’s popularity had spread across Europe and to
              America. The breed was tougher sell in England. The Bulldog was a
              national symbol, and it rankled many Englishmen that their age-old
              rivals, the French, would dare adapt it to their purposes.
              American devotees of the early 1900s contributed to the breed by
              insisting that the bat ear, as opposed to the “rose ear,” was the
              correct Frenchie type. It is by this distinctive feature that the
              Frenchie is instantly recognizable the world over.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}

export default AboutPage
