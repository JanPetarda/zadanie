import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"


export default function Content({  updateCheckStatus, fruits }) {
    
    // const [isChecked, setIsChecked] = useState(false)
    
    return (
        <>
            {fruits.map((fruit, index) => (
                <div className="flex items-center space-x-2">
                <Checkbox 
                    id={`fruit-${index}`} 
                    checked={fruit.checked}
                    onCheckedChange={() => updateCheckStatus(index)}
                /> 
                <Label htmlFor={`fruit-${index}`}>{fruit.name}</Label>
                <p>{fruit.price}</p>
            </div>
      ))}
        </>
    )
}