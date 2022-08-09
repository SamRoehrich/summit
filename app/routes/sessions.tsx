import { Link, Outlet } from "@remix-run/react";
import Header from "../components/Header";

export default function SessionIndex() {
  return (
    <div>
      <Header />
      <div>
        <ul>
          <li>
            <div>
              <Link className="block p-4 text-xl text-blue-500" to="new">
                New Session
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
