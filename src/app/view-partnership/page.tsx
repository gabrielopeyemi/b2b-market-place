import { Button } from "./../../components/elements/button";
import { Card } from "./../../components/elements/card";

;

const form1Fields = [
	{
		name: "business_name",
		label: "Business name",
		value: "Mathsvile "
	},
	{
		name: "business_address",
		label: "Business Address",
		value: "12 ,Araromi, Lagos, Nigeria"
	},
	{
		name: "email",
		label: "Email Address",
		value: "freeborn,.audrey@gmail.com"
	},
	{
		name: "phoneNumber",
		label: "Phone Number",
		value: "+2348012345678"
	}
];


const form2Fields = [
	{
		name: "name",
        label: "Full name",
		value: "Matthew Arowosegbe"
	},
	{
		name: "email",
		label: "Email Address",
		value: "freeborn,.audrey@gmail.com"
	},
	{
		name: "phoneNumber",
		label: "Phone Number",
		value: "+2348012345678"
	}

];

const form3Fields = [
	{
		name: "Partnership_method",
		label: "Partnership method",
		value: "Production support "
	},
	{
		name: "budget",
		label: "Budget",
		value: "N100,000"
	},
	{
		name: "payment_method",
		label: "Payment method",
		value: "Credit card"
	},
    {
		name: "additional_information",
		label: "Addtional information",
		value: "you are blessed as you come"
	},
];

export default function ViewPartnershipRequest() {
	return (
		<main className='w-full p-5 lg:px-10 lg:py-20 space-y-10 lg:space-y-20 max-w-2xl mx-auto'>
			<div className='space-y-2'>
				<h2 className='font-medium text-3xl lg:text-5xl text-[#2255A0]'>
					View partner application
				</h2>

				<p className='text-sec lg:text-lg'>
                The event personnel will evaluate this request based on the information provided.
				</p>
			</div>

			<div className='w-full space-y-10'>
				<div className='w-full flex flex-col space-y-5'>
					<h2 className='text-2xl font-semibold'>{`Organization's`} details</h2>

					<Card className='p-5 flex flex-col gap-5'>
						{form1Fields.map(field => (
							<div key={field.name} className='flex flex-col'>
								<label
									className='text-sm text-sec font-medium'
									htmlFor={field.name}
								>
									{field.label}
								</label>
								<p>{field.value}</p>
							</div>
						))}
					</Card>
				</div>

				<div className='w-full flex flex-col space-y-5'>
					<h2 className='text-2xl font-semibold'>{"Contact person's details"}</h2>

					<Card className='p-5 flex flex-col gap-5'>
						{form2Fields.map(field => (
							<div key={field.name} className='flex flex-col'>
								<label
									className='text-sm text-sec font-medium'
									htmlFor={field.name}
								>
									{field.label}
								</label>
								<p>{field.value}</p>
							</div>
						))}
					</Card>
				</div>

				<div className='w-full flex flex-col space-y-5'>
					<h2 className='text-2xl font-semibold'>Partnreship details</h2>

					<Card className='p-5 flex flex-col gap-5'>
						{form3Fields.map(field => (
							<div key={field.name} className='flex flex-col'>
								<label
									className='text-sm text-sec font-medium'
									htmlFor={field.name}
								>
									{field.label}
								</label>
								<p>{field.value}</p>
							</div>
						))}
					</Card>
				</div>

				<Button className='w-full' size='lg'>
					Close Section
				</Button>
			</div>
		</main>
	);
}
