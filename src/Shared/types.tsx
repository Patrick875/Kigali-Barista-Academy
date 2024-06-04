import { ReactNode } from "react";

export interface navItem {
	text: string;
	to: string;
	subnavs?: subnav[];
}
interface subnav {
	title: string;
	to: string;
}
export interface sidenavType {
	page: string;
	link: string;
	icon: ReactNode;
	location: string;
}

export interface CarouselItem {
	img: string;
	text: string;
}

export interface social {
	name: string;
	link: string;
	icon: ReactNode;
}
export interface studentTest {
	name: string;
	text: string;
	img: string;
	footer: string;
}
export interface clientTest {
	name?: string;
	text: string;
	footer: string;
}
export interface portfolio {
	id?: string;
	names: string;
	email: string;
	phone: string;
	profile: string;
	bio: string;
	cv: File | string;
}
