import { Checkbox } from "@/components/ui/checkbox"
// import { Label } from "@/components/ui/label"

export default function Header({selectAll, unfold}) {

    

    return(

        <div className="flex">
            <div className="flex items-center space-x-2">
                <Checkbox onCheckedChange={()=> selectAll()} id="apples" />
                
            </div>

            <div onClick={unfold}  className="flex space-x-2">
                <p>Owoce</p>
                <img className="w-4 space-y-2" src="public/arrow.svg" alt="arrow" />
            </div>


            
        </div>
        
    )
}