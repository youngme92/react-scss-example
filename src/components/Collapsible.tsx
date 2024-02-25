import React, { useState, useContext } from "react";

interface CollapsibleProps
  extends React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  initialOpen?: boolean;
}
interface TriggerProps
  extends React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {}
interface ContentProps
  extends React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {}

interface CollapsibleContextType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const CollapsibleContext = React.createContext<CollapsibleContextType | null>(
  null
);
export default function Collapsible({
  children,
  className,
  initialOpen = false,
  ...props
}: CollapsibleProps) {
  const [open, setOpen] = useState(initialOpen);
  return (
    <CollapsibleContext.Provider value={{ open, setOpen }}>
      <div className={`collapsible ${className}`} {...props}>
        {children}
      </div>
    </CollapsibleContext.Provider>
  );
}

function Trigger({ children, className, ...props }: TriggerProps) {
  const context = useContext(CollapsibleContext);
  if (!context) {
    throw new Error("Trigger must be used within a Collapsible");
  }
  const { open, setOpen } = context;
  return (
    <div
      className={`collapsible__trigger ${className} ${open ? "active" : ""}`}
      onClick={() => setOpen(!open)}
      {...props}
    >
      {children}
    </div>
  );
}

Collapsible.Trigger = Trigger;

function Content({ children, className, ...props }: ContentProps) {
  const context = useContext(CollapsibleContext);
  if (!context) {
    throw new Error("Content must be used within a Collapsible");
  }
  const { open } = context;
  return (
    open && (
      <div className={`collapsible__content ${className}`} {...props}>
        {children}
      </div>
    )
  );
}

Collapsible.Content = Content;
