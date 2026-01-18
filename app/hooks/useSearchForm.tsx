
import { useState } from "react"

type useSearchFormReturn = {
    input: string
    handleSubmit: (e:React.FormEvent<HTMLFormElement>) => void
    handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void
    reset: () => void
}

type useSearchFormProps = {
    onSubmit: (value: string) => void
}

export default function useSearchForm( { onSubmit }:useSearchFormProps ):useSearchFormReturn {
    const [input, setInput] = useState<string>("");

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(input.trim() === "") return;

        onSubmit(input)
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const reset = () => {
        setInput("");
    }
    
    return {
        input, handleSubmit, handleChange, reset
    }
}
