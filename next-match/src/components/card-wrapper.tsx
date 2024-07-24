import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import { FC, ReactNode } from "react";
import { IconType } from "react-icons";

interface Props {
  body?: ReactNode;
  headerIcon: IconType;
  headerText: string;
  subHeaderText?: string;
  action?: () => void;
  actionLabel?: string;
  footer?: ReactNode;
}

const CardWrapper: FC<Props> = ({
  body,
  headerIcon: Icon,
  headerText,
  subHeaderText,
  action,
  actionLabel,
  footer,
}): JSX.Element => {
  return (
    <div className="flex items-center justify-center align-middle w-full vertical-center">
      <Card className="max-w-4xl w-full mx-auto p-5">
        <CardHeader className="flex flex-col items-center justify-center">
          <div className="flex flex-col gap-2 items-center text-secondary">
            <div className="flex flex-row items-center gap-3">
              <Icon size={30} />
              <h1 className="text-3xl font-semibold">{headerText}</h1>
            </div>
            <p className="text-neutral-500">{subHeaderText}</p>
          </div>
        </CardHeader>
        {body && <CardBody>{body}</CardBody>}
        <CardFooter>
          {action && (
            <Button
              onClick={action}
              fullWidth
              color="secondary"
              variant="bordered"
            >
              {actionLabel}
            </Button>
          )}
          {footer && <>{footer}</>}
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardWrapper;
