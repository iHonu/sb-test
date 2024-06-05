import {typographyVariants} from './Typography';
import { HTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";

export default interface TypographyProps extends HTMLAttributes<HTMLElement>, VariantProps<typeof typographyVariants> {
        // as?: keyof JSX.IntrinsicElements; PROBLEM WITH TYPE
        as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
    }
  