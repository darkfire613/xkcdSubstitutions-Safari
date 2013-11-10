walk(document.body);

function walk(node) 
{
        // I stole this function from here:
        // http://is.gd/mwZp7E
        
        var child, next;

        switch ( node.nodeType )  
        {
                case 1:  // Element
                case 9:  // Document
                case 11: // Document fragment
                        child = node.firstChild;
                        while ( child ) 
                        {
                                next = child.nextSibling;
                                walk(child);
                                child = next;
                        }
                        break;

                case 3: // Text node
                        handleText(node);
                        break;
        }
}

function handleText(textNode) 
{
        var v = textNode.nodeValue;

        v = v.replace(/\bWitnesses\b/g, "These dudes I know");
        v = v.replace(/\bwitnesses\b/g, "these dudes I know");
        v = v.replace(/\bWitness\b/g, "This dude I know");
        v = v.replace(/\bwitness\b/g, "this dude I know");

        v = v.replace(/\bAllegedly\b/g, "Kinda probably");
        v = v.replace(/\ballegedly\b/g, "kinda probably");

        v = v.replace(/\bNew Study\b/g, "Tumblr Post");
        v = v.replace(/\bNew study\b/g, "Tumblr post");
        v = v.replace(/\bnew study\b/g, "Tumblr post");
        v = v.replace(/\bNew Studies\b/g, "Tumblr Post");
        v = v.replace(/\bNew studies\b/g, "Tumblr post");
        v = v.replace(/\bnew studies\b/g, "Tumblr post");

        v = v.replace(/\bRebuild\b/g, "Avenge");
        v = v.replace(/\brebuild\b/g, "avenge");
        v = v.replace(/\bRebuilding\b/g, "Avenging");
        v = v.replace(/\brebuilding\b/g, "avenging");
        v = v.replace(/\bRebuilt\b/g, "Avenged");
        v = v.replace(/\brebuilt\b/g, "avenged");

        v = v.replace(/\bSpace\b/g, "Spaaace");
        v = v.replace(/\bspace\b/g, "spaaace");

        v = v.replace(/\bGoogle Glass\b/g, "Virtual Boy");
        v = v.replace(/\bGoogle glass\b/g, "Virtual Boy");
        v = v.replace(/\bgoogle Glass\b/g, "Virtual Boy");
        v = v.replace(/\bgoogle glass\b/g, "Virtual Boy");
        v = v.replace(/\bGoogle Glasses\b/g, "Virtual Boys");
        v = v.replace(/\bGoogle glasses\b/g, "Virtual Boys");
        v = v.replace(/\bgoogle Glasses\b/g, "Virtual Boys");
        v = v.replace(/\bgoogle glasses\b/g, "Virtual Boys");

        v = v.replace(/\bSmartphone\b/g, "Pokédex");
        v = v.replace(/\bsmartphone\b/g, "pokédex");
        v = v.replace(/\bSmartphones\b/g, "Pokédexes");
        v = v.replace(/\bsmartphones\b/g, "pokédexes");

        v = v.replace(/\bElectric\b/g, "Atomic");
        v = v.replace(/\belectric\b/g, "atomic");

        v = v.replace(/\bSenator\b/g, "Elf-Lord");
        v = v.replace(/\bsenator\b/g, "elf-lord");
        v = v.replace(/\bSenators\b/g, "Elf-Lords");
        v = v.replace(/\bsenators\b/g, "elf-lords");

        v = v.replace(/\bCar\b/g, "Cat");
        v = v.replace(/\bcar\b/g, "cat");
        v = v.replace(/\bCars\b/g, "Cats");
        v = v.replace(/\bcars\b/g, "cats");

        v = v.replace(/\bElection\b/g, "Eating contest");
        v = v.replace(/\belection\b/g, "eating contest");
        v = v.replace(/\bElections\b/g, "Eating contests");
        v = v.replace(/\belections\b/g, "eating contests");

        v = v.replace(/\bCongressional Leaders\b/g, "River Spirits");
        v = v.replace(/\bCongressional leaders\b/g, "River spirits");
        v = v.replace(/\bcongressional leaders\b/g, "river spirits");
        v = v.replace(/\bCongressional Leader\b/g, "River Spirit");
        v = v.replace(/\bCongressional leader\b/g, "River spirit");
        v = v.replace(/\bcongressional leader\b/g, "river spirit");
        
        v = v.replace(/\bHomeland Security\b/g, "Homestar Runner");
        v = v.replace(/\bHomeland security\b/g, "Homestar runner");
        v = v.replace(/\bhomeland security\b/g, "homestar runner");

        v = v.replace(/\bCould Not Be Reached For Comment\b/g, "Is Guilty And Everyone Knows It");
        v = v.replace(/\bcould not be reached for comment\b/g, "is guilty and everyone knows it");
        v = v.replace(/\bCould Not Be Reached for Comment\b/g, "Is Guilty and Everyone Knows It");


        textNode.nodeValue = v;
}