"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function ProductCard({ product }) {
  const firstColor = product.colors[0];
  const imageUrl = firstColor.image_url[0];

  return (
    <Link href={`/shop/products/${product.id}`}>
      <div className="product-card border">
        <div className="bg-white w-full flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Image
              src={imageUrl.high_res}
              alt={product.name}
              width={1000}
              height={1000}
              className="object-contain"
              blurDataURL={imageUrl.low_res}
              placeholder="blur"
            />
          </motion.div>
        </div>
        <div className="flex items-center justify-between m-4">
          <h2 className="text-lg font-semibold uppercase">{product.name}</h2>
          <p className="p-2 bg-foreground text-background">
            {product.price}CHF
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
