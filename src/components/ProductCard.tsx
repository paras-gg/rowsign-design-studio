import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  icon: LucideIcon;
  badge?: string;
  highlight?: boolean;
}

const ProductCard = ({
  id,
  title,
  description,
  price,
  originalPrice,
  icon: Icon,
  badge,
  highlight = false,
}: ProductCardProps) => {
  return (
    <div
      className={`group relative bg-card rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${
        highlight
          ? "border-primary shadow-md ring-2 ring-primary/20"
          : "border-border/50 shadow-sm"
      }`}
    >
      {/* Highlight Ribbon */}
      {highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge className="bg-primary text-primary-foreground px-4 py-1 font-semibold">
            <Sparkles className="w-3 h-3 mr-1" />
            Best Value
          </Badge>
        </div>
      )}

      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-8 h-8 text-primary" />
      </div>

      {/* Badge */}
      {badge && (
        <Badge variant="secondary" className="mb-3 bg-accent text-accent-foreground">
          {badge}
        </Badge>
      )}

      {/* Title */}
      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>

      {/* Price */}
      <div className="mb-5">
        {originalPrice && (
          <span className="text-sm text-muted-foreground line-through mr-2">
            {originalPrice}
          </span>
        )}
        <span className="text-2xl font-bold text-primary">{price}</span>
      </div>

      {/* CTA */}
      <Button
        asChild
        variant={highlight ? "default" : "outline"}
        className={`w-full rounded-full group-hover:shadow-md transition-all ${
          highlight ? "bg-primary text-primary-foreground" : "border-primary/30 hover:bg-primary/10"
        }`}
      >
        <Link to={`/produk/${id}`}>
          Lihat Detail
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </div>
  );
};

export default ProductCard;