import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function CardWithForm() {
    return (
        <Card className="">
            <div className="relative">
                <img
                    src="https://picsum.photos/1000/1000?random=4"
                    alt="Project Image"
                    className="w-full h-[200px] object-cover rounded-t-lg"
                />
            </div>
            <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
            </CardHeader>

            <CardContent>
                <p>New Delhi</p>
            </CardContent>
            <CardFooter className="flex justify-between">

            </CardFooter>
        </Card>
    )
}