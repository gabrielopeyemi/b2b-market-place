'use client'
import { Avatar, AvatarImage, AvatarFallback } from "./../../../components/ui/avatar";
import { Button } from "./../../../components/elements/button";
import { Card } from "./../../../components/elements/card";
import image from './../../../assets/images/partnerships-requested-hero.jpeg'
import profilePic from '../../../assets/images/partner-profile.png'
import ExtendedFields, {
	FormFieldMetadata
} from "./../../../components/ui/extended-form-fields";
import { Form } from "./../../../components/form/form";
import { Input } from "./../../../components/form/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from "./../../../components/form/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RiBookmarkFill, RiBookmarkLine } from "react-icons/ri";
import { z } from "zod";
import Image from "next/image";

const formSchema = z.object({
	email: z.string().email(),
	partnerId: z.string(),
	coverNote: z.string()
});

const defaultValues = {
	email: "",
	partnerId: "",
	coverNote: ""
};
interface partners {
    subject: string;
    company: string;
    text: string;
    services: string[];
  }
  
type FormSchema = z.infer<typeof formSchema>;

const formFields: FormFieldMetadata[] = [
	{
		name: "email",
		placeholder: "Email Address",
		label: "Email Address",
		type: "text"
	},
	{
		name: "COG Partner ID",
		placeholder: "",
		label: "COG Partner ID",
		type: "text"
	},
	{
		name: "coverNote",
		placeholder: "Cover Note",
		label: "Cover Note",
		type: "textarea"
	}
];

const partners:partners[] = [
    {
      subject: "Request for consultants",
      company: "Ministry of Power and Mines",
      text: "The client is in search of a consultant to engage for the development of a dam in Oyo",
      services: ["Engineering consultancy", "Geotechnics", "EPC", "Dams"]
    },
    {
      subject: "Microchip Installation",
      company: "Ryno Systems Co.",
      text: "Firm must have experience in building microchips certified by TMSC for intensive production...",
      services: ["Microchips", "Electronics", "Fluid system design"]
    },
    {
      subject: "RenOil",
      company: "RenOil",
      text: "We are looking for developers of undersea oil pipeline with monitoring capabilities.",
      services: ["Crude pipeline", "Fluid dynamics", "Geotechnics"]
    },
    {
      subject: "Property manager EOI",
      company: "Adron Homes",
      text: "We are looking for property managers for our new estate in Lagos. Applicants must have",
      services: ["Estate services", "Property management"]
    },
    {
      subject: "Call for proposals",
      company: "MegaCon",
      text: "We are looking to fund innovative approach to solve housing crisis in Nigeria.",
      services: ["Grants", "Research and innovation", "Housing"]
    }
  ];
  

export default function PartnershipsRequested() {
	const form = useForm<FormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues
	});

	return (
		<main className='w-full p-5 lg:px-10 lg:py-20 space-y-10 lg:space-y-20'>
			<div className='relative w-full'>
				<header className='relative bg-ce bg-cover w-full p-52'>
                    <Image src={image} className="absolute top-0 left-0 h-full w-full  bg-contain bg-center" alt="partnership request image"/>
					<div className='absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black/90 to-black/5' />
				</header>

				<div className='px-10 w-full py-5 bg-white rounded-xl space-y-5 shadow-[0px_0px_30px_0px_#00000026] max-w-5xl mx-auto absolute left-[50%] translate-x-[-50%] -bottom-20'>
					<h4 className='font-semibold text-lg lg:text-xl '>
						Search for requested partnerships
					</h4>

					<div className='w-full flex items-center space-x-5'>
						<Input className='flex-1' placeholder='location' />
						<Button size='lg' className='px-10'>
							Search
						</Button>
					</div>
				</div>
			</div>

			<div className='pt-32 w-full px-10 lg:px-20 space-y-10'>
				<h2 className='font-medium text-xl lg:text-3xl text-center'>
					Partnerships requested
				</h2>

				<div className='w-full flex space-x-5 justify-start'>
					<div className=''>
						<Select>
							<SelectTrigger className='bg-transparent border-none text-lg'>
								<SelectValue placeholder='Recent' />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Recent</SelectLabel>
									{[].map(location => (
										<SelectItem key={location} value={location}>
											{location}
										</SelectItem>
									))}
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>

					<div className=''>
						<Select>
							<SelectTrigger className='bg-transparent border-none text-lg'>
								<SelectValue placeholder='Date Posted' />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Date Posted</SelectLabel>
									{[].map(location => (
										<SelectItem key={location} value={location}>
											{location}
										</SelectItem>
									))}
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>

					<div className=''>
						<Select>
							<SelectTrigger className='bg-transparent border-none text-lg'>
								<SelectValue placeholder='Request Partner Type' />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Recent</SelectLabel>
									{[].map(location => (
										<SelectItem key={location} value={location}>
											{location}
										</SelectItem>
									))}
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</div>

				<div className='flex flex-col lg:flex-row lg:space-x-5'>
					<div className='w-full flex flex-col space-y-5 lg:w-2/5'>
						{partners.map((e, index) => (
								<Card key={index} className='p-5 rounded-xl flex flex-col gap-5'>
									<div className='w-full flex space-x-3 items-start'>
										{/* <Avatar className='h-20 w-20'>
											<AvatarImage src='../../../assets/images/partner-profile.png' alt='avatar' />
											<AvatarFallback>{e.subject}</AvatarFallback>
										</Avatar> */}
                                        <div>
                                            <Image className="mr-4"  src={profilePic} alt={e.subject}/>
                                        </div>

										<div className='flex-1 space-y-1'>
											<h3 className='lg:text-xl font-medium'>
                                            {e.company}
											</h3>

											<span className='text-foreground/80 '>
                                            {e.subject}
											</span>

											<p className='text-foreground/60 text-xs'>
                                            {e.text}
											</p>
										</div>

										<Button size='icon' variant='ghost'>
											<RiBookmarkFill className='text-lg' />
										</Button>
									</div>
                               
                                    
									<div className='flex space-x-2 items-center'>
                                    {
                                        e.services.map((e, index)=>{
                                          return(
                                            <span key={index} className='text-sm px-2 py-1 rounded-lg bg-gray-100'>
                                                {e}
										</span>
                                          )
                                        })
                                    }
									</div>
								</Card>
							))}
					</div>

					<Card className='w-full flex flex-col space-y-5 lg:w-3/5 p-5 rounded-xl gap-7'>
						<div className='w-full flex space-x-3 items-start'>
							{/* <Avatar className='h-20 w-20'>
								<AvatarImage src='/images/avatar.png' alt='avatar' />
								<AvatarFallback>FTF</AvatarFallback>
							</Avatar> */}
                            <Image src={profilePic} className="mr-4" alt="something"/>

							<div className='flex-1 space-y-1'>
								<h3 className='lg:text-xl font-medium'>
                                Construction of Textile Manufacturing...
								</h3>

								<span className='text-foreground/80 text-xs'>
									Ankara Nigeria 
								</span>
							</div>

							<Button size='icon' variant='ghost'>
								<RiBookmarkLine className='text-lg' />
							</Button>
						</div>

						<div className='space-y-2'>
							<h5 className='font-medium'>Project Overview</h5>
							<p className='text-foreground/60 text-sm'>
							We are looking for project managers and contractors to develop a state-of -the-art textile facility in Ogun state,.  

							</p>
							<p className='text-foreground/60 text-sm'>

We expect that the winning bids has done previous projects in this field and can demonstrate ability via similar projects done in the past. Typical successful awardees are Tier 1 contractors in Nigeria.
							</p>
						</div>

						<div className='space-y-2'>
							<h5 className='font-medium'>Responsibilities</h5>
							<p className='text-foreground/60 text-sm'>
								The ideal candidate should have an LLB with a minimum of 2nd Class Upper division with 3 - 7 years experience in Litigation at trial and appellate courts.The ideal candidate should have an LLB with a minimum of 2nd
								Class Upper division with 3 - 7 years experience in Litigation
								at trial and appellate courts.
							</p>
						</div>

						<div className='space-y-2'>
							<h5 className='font-medium'>Tags</h5>

							<div className='flex space-x-2 items-center flex-wrap'>
								<span className='text-sm px-2 py-1 rounded-lg bg-gray-100'>
									Industrial faculties
								</span>
								<span className='text-sm px-2 py-1 rounded-lg bg-gray-100'>
									Manufacturing
								</span>
								<span className='text-sm px-2 py-1 rounded-lg bg-gray-100'>
									Contractor
								</span>
							</div>
						</div>

						<Form {...form}>
							<form className='space-y-5'>
								<ExtendedFields formFields={formFields} form={form} />

								<div className='w-full flex justify-center'>
									<Button size='lg' className='px-10'>
										Apply here
									</Button>
								</div>
							</form>
						</Form>
					</Card>
				</div>
			</div>
		</main>
	);
}
