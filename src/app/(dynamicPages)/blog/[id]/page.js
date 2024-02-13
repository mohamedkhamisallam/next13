import React from 'react'
import styles from './idPost.module.css'
import Image from 'next/image'
export async function generateMetadata({ params}) {
  // read route params
 
 const product=await getData(params.id)
 
  return {
    title: product.title,
   
  }
}
 
const getData = async (id) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  return response.json();
};
const page =async ({params}) => {
  const data = await getData(params.id);
  console.log(data.title);
  return (
    <>
      <div className={styles.container}> 
      <header className={styles.header}>
        

        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.description}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
          className={styles.image}
          src={data.thumbnail}
          alt='image'
          fill={true}
          
          />
        </div>
      </header>



      <div className={styles.content}>
        <p className={styles.text}> 
        The Lorem ipum filling text is used by graphic designers, programmers and printers with the aim of occupying the spaces of a website, an advertising product or an editorial production whose final text is not yet ready.
        The Lorem ipum filling text is used by graphic designers, programmers and printers with the aim of occupying the spaces of a website, an advertising product or an editorial production whose final text is not yet ready.
        The Lorem ipum filling text is used by graphic designers, programmers and printers with the aim of occupying the spaces of a website, an advertising product or an editorial production whose final text is not yet ready.
        The Lorem ipum filling text is used by graphic designers, programmers and printers with the aim of occupying the spaces of a website, an advertising product or an editorial production whose final text is not yet ready.
        The Lorem ipum filling text is used by graphic designers, programmers and printers with the aim of occupying the spaces of a website, an advertising product or an editorial production whose final text is not yet ready.
        The Lorem ipum filling text is used by graphic designers, programmers and printers with the aim of occupying the spaces of a website, an advertising product or an editorial production whose final text is not yet ready.
        The Lorem ipum filling text is used by graphic designers, programmers and printers with the aim of occupying the spaces of a website, an advertising product or an editorial production whose final text is not yet ready.
        The Lorem ipum filling text is used by graphic designers, programmers and printers with the aim of occupying the spaces of a website, an advertising product or an editorial production whose final text is not yet ready.
        </p>
      </div>

      </div>
    </>
  )
}

export default page