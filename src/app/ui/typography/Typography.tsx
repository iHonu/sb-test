import { cva } from "class-variance-authority";
import { cn } from "@/app/utils/utils";
import TypographyProps from "./typographyProps";

export const typographyVariants = cva("", {
  variants: {
    textSize: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
    weight: {
      regular: "font-normal",
      semiBold: "font-semibold",
      bold: "font-bold",
    },
    colorVariant: {
      regular: "text-black",
      primary: "text-[#D4FF00]",
      gray500: "text-gray-500",
      gray800: "text-gray-800",
    },
    lineHeight: {
      small: "leading-5",
      medium: "leading-[22px]",
      large: "leading-[25px]",
    },
    predefined: {
      paragraphMedium: "text-base font-normal leading-[22px] text-gray-800",
      paragraphSmall: "text-sm font-normal leading-5 text-gray-500",
      paragraphSmallSemi: "text-sm font-semibold leading-5 text-gray-800",
      headingSmall: "text-lg leading-[25px] font-bold text-[#D4FF00]",
    }
    
  },
  defaultVariants: {
    textSize: "medium",
    weight: "regular",
    colorVariant: "regular",
  },
});



export const Typography = ({ as: Component = 'p', className, textSize, weight, colorVariant, ...props }: TypographyProps) => {
    return <Component className={cn(typographyVariants({ textSize, weight, colorVariant }), className)} {...props} ></Component>;
};

