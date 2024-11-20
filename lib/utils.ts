import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export async function getCompanyData(companies : Record<string,string>){
	const seriesData = []
	const detailData = []
	for (var key in companies) {
		const urlSeries = `/api/${companies[key]}/daily`
		const urlDetail = `/api/${companies[key]}/details`
		seriesData.push(await (await fetch(urlSeries)).json())
		detailData.push(await (await fetch(urlDetail)).json())
	}
	// console.log(seriesData, detailData)
	return {seriesData, detailData}
}