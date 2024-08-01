"use client";

import { useClerk } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";

export default function NotFound() {
	const { signOut } = useClerk();

	return (
		<div className="flex flex-col gap-5 flex-1 items-center  pt-24 sm:pt-36 lg:pt-48">
			<div className="text-9xl font-bold">404</div>
			<div className="flex gap-5 ">
				<Link href="/">
					<Button variant={"secondary"}>Go to Dashboard</Button>
				</Link>
				<Button
					variant="outline"
					onClick={() => signOut({ redirectUrl: "/dashboard" })}
				>
					Change Account
				</Button>
			</div>
		</div>
	);
}
