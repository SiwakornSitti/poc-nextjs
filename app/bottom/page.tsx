"use client";

import { twMerge } from "@/utils/twMerge";
import classNames from "classnames";

interface ButtonProps {
  /**
   * What type button to use
   */
  option?:
    | "filled-button--primary"
    | "filled-button--success"
    | "filled-button--gold"
    | "filled-button--danger"
    | "filled-button--disabled"
    | "ghost-button--primary"
    | "ghost-button--secondary"
    | "ghost-button--danger"
    | "ghost-button--disabled"
    | "sort"
    | "slip";
  //   | 'reward';
  /**
   * What button size
   */
  size?: "large" | "medium" | "small" | "mini";
  /**
   * What button width
   */
  width?: string;
  /**
   * What button height
   */
  height?: string;
  /**
   * Button contents
   */
  label?: string;
  /**
   * label padding
   */
  padding?: string;
  /**
   * button type
   */
  type?: "button" | "submit" | "reset" | undefined;
  /**
   * is button width === w-auto or not
   */
  isAutoWidth?: boolean;
  /**
   * button value
   */
  value?: string;
  /**
   * Icon in front of icon
   */
  icon?: ReactElement;
  /**
   *  fontWeight of text
   */
  fontWeight?: "sbold" | "regular";
  /**
   *  button state click or non-click
   */
  isSelected?: boolean;
  /**
   * className of component
   */
  className?: string;
  /**
   * Timer
   */
  timer?: number;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

interface BottomBarButtonProps {
  option?: ButtonProps["option"];
  label: string;
  onClick: () => void;
}

type ButtonDetail = {
  default: string;
  onSelected: string;
  darkMode: string;
};

type ButtonSize = {
  x: string;
  y: string;
  font: string;
  lineHeight: string;
};

const getBtn = (option: string): ButtonDetail => {
  switch (option) {
    case "filled-button--primary":
      return {
        default:
          "bg-gradient-to-r from-blue to-blue-primary text-white active:bg-gradient-to-r active:from-blue-dark active:to-blue-dark",
        onSelected: "",
        darkMode: "",
      };
    case "filled-button--success":
      return {
        default: "bg-gradient-to-r from-green-light to-green text-white",
        onSelected: "",
        darkMode: "",
      };
    case "filled-button--gold":
      return {
        default:
          "bg-gradient-to-r from-yellow-gold via-yellow-gold-lighter to-yellow-gold text-brown-gold-dark shadow-[0_6px_12px_-0_rgba(0,0,0,0.1)]",
        onSelected: "",
        darkMode: "",
      };
    case "filled-button--danger":
      return {
        default: "bg-red text-white",
        onSelected: "",
        darkMode: "",
      };
    case "filled-button--disabled":
      return {
        default: "bg-grey text-white",
        onSelected: "",
        darkMode: "",
      };
    case "ghost-button--primary":
      return {
        default:
          "bg-white border border-solid border-blue-primary text-blue-primary active:border-blue-dark active:text-blue-dark",
        onSelected: "",
        darkMode: "bg-black border border-solid border-white text-white",
      };
    case "ghost-button--secondary":
      return {
        default:
          "bg-white border border-solid border-orange text-orange active:border-orange-dark active:text-orange-dark",
        onSelected: "",
        darkMode: "bg-black border border-solid border-white text-white",
      };
    case "ghost-button--danger":
      return {
        default: "bg-white border border-solid border-red text-red",
        onSelected: "",
        darkMode: "",
      };
    case "ghost-button--disabled":
      return {
        default: "bg-white border border-solid border-grey text-grey",
        onSelected: "",
        darkMode: "",
      };
    case "sort":
      return {
        default: "bg-lightest text-navy-blue-light",
        onSelected:
          "bg-fade-blue-lighter border border-solid border-blue-primary text-black",
        darkMode: "",
      };
    case "slip":
      return {
        default: "bg-white text-blue-primary",
        onSelected: "",
        darkMode: "",
      };
    default:
      return {
        default: "",
        onSelected: "",
        darkMode: "",
      };
  }
};

const getSize = (size: string): ButtonSize => {
  switch (size) {
    case "large":
      return {
        x: "px-4",
        y: "py-2.5",
        font: "text-18-sbold",
        lineHeight: "leading-7",
      };
    case "medium":
      return {
        x: "px-4",
        y: "py-1.5",
        font: "text-18-sbold",
        lineHeight: "leading-7",
      };
    case "small":
      return {
        x: "px-4",
        y: "py-1.5",
        font: "text-16-sbold",
        lineHeight: "leading-6",
      };
    case "mini":
      return {
        x: "px-3",
        y: "py-[5px]",
        font: "text-14-sbold",
        lineHeight: "leading-6",
      };
    default:
      return {
        x: "px-[]",
        y: "py-[]",
        font: "",
        lineHeight: "leading-6",
      };
  }
};

export const Button = ({
  option = "filled-button--primary",
  size = "large",
  label = "ตกลง",
  type = "button",
  timer = 0,
  isAutoWidth = false,
  icon,
  isSelected = false,
  className,
  onClick,
  ...props
}: ButtonProps) => {
  const btn = getBtn(option);
  const btnSize = getSize(size);

  return (
    <button
      type={type}
      className={twMerge(classNames(
        "button",
        `flex ${isAutoWidth ? "w-auto" : "w-full"} items-center justify-center`,
        btnSize.x,
        btnSize.y,
        btnSize.font,
        btnSize.lineHeight,
        btn.default,
        { [btn.onSelected]: isSelected }
      ))}
      disabled={option?.includes("disabled")}
      onClick={onClick}
      {...props}
    >
      <div
        className={`button-group text-center ${
          !label && icon ? "inline-flex items-center justify-center" : ""
        }`}
      >
        {icon && (
          <div className="mr-2 flex cursor-pointer items-center justify-center">
            {icon}
          </div>
        )}
        <div className="grid-rows-1justify-center grid">
          {label && (
            <p className={`${classNames({ "mx-auto": !icon })}`}>
              {label} <br />
            </p>
          )}
        </div>
      </div>
    </button>
  );
};

export default function Bottom() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-indigo-300">
      <div className="fixed bottom-0 left-0 w-full rounded-t-xl bg-white px-4 pb-2 pt-4 shadow-footer">
        <Button
          option="filled-button--primary"
          label="ยืนยัน"
          onClick={() => {}}
        />
      </div>
    </main>
  );
}
