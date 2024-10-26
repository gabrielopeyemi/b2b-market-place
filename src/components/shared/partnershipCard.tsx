'use client'
import { cn } from "../../lib/utils";

import { RiHeartLine, RiStarFill, RiVerifiedBadgeFill } from "react-icons/ri";


import Image from "next/image";
import { Button } from "../elements/button";
import { Card, CardContent } from "../elements/card";
import Link from "next/link";

interface PartnershipCardProps {
	image: string|any;
	name: string;
	type: string;
	location: string;
	isVerified: boolean;
	rating: number;
	reviews: number;
	noOfPartners: number;
	className?: string;
    
}

export default function PartnershipCard({
	image,
	isVerified,
	location,
	name,
	noOfPartners,
	rating,
	reviews,
	type,
	className
}: PartnershipCardProps) {
	return (
		<Card className={cn("rounded-xl overflow-hidden", className ?? "")}>
			<figure className='aspect-video w-full relative'>
				<Image src={image} alt={name} className='object-cover h-full w-full' />

				<button className='absolute top-2 right-2 bg-white p-2 rounded-full'>
					<RiHeartLine className='text-primary' />
				</button>
			</figure>

			<CardContent className='p-3 flex flex-col gap-2'>
				<span className='uppercase text-sec text-sm font-semibold'>{type}</span>

				<div className='w-full'>
					<div className='flex items-center space-x-2 leading-none font-semibold'>
						<h5 className='text-lg font-normal'>{name}</h5>
						{isVerified && <RiVerifiedBadgeFill className='text-[#0063A2]' />}
					</div>

					<span className='text-sec font-semibold text-xs leading-none'>
						{location}
					</span>
				</div>

				<div className='flex space-x-1 items-center text-sec'>
					<RiStarFill className='text-base text-amber-500' />
					<span className='text-xs'>{rating.toFixed(1)}</span>
					<span className='text-foreground/60 text-xs'>({reviews})</span>
					<span className='text-foreground/60 text-xs'>&#183;</span>
					<span className='text-foreground/60 text-xs text-sec'>
						{noOfPartners} partnership done
					</span>
				</div>

				<div className='flex items-center space-x-3'>
					<Button
						size='sm'
						className='flex-1 h-auto py-4 text-primary font-semibold'
						variant='outline'
					>
					<Link href={'/navigations/profile'}>View Profile</Link>
					</Button>
					<Button size='sm' className='flex-1 h-auto py-4 font-semibold'>
						<Link href={'/request-personnel'}>Request Partnership</Link>
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
