import { Form } from "@remix-run/react";
import * as React from "react";

export default function NewSessionPage() {
  const titleRef = React.useRef<HTMLInputElement>(null);
  return (
    <Form>
      <div>
        <label>
          <span>Title: </span>
          <input
            ref={titleRef}
            name="title"
            className="flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
          />
        </label>
      </div>
    </Form>
  );
}
