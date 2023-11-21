document.addEventListener('DOMContentLoaded', function () {

    let allNodes = document.querySelectorAll("#container *");

    for (const node of allNodes) {
        node.addEventListener('click', function (event) {
            event.stopPropagation();
            let parent = node.parentElement.parentElement;
            console.log("parent")
            console.log(parent.getAttribute("id"), parent.tagName);
            let parentChildren = parent.children;
            console.log("all silblings")
            for (const child of parentChildren) {
                if (child !== node.parentElement) {
                    console.log(child)
                }
            }
            console.log("previous silbling")
            const previousSibling = node.parentElement.previousElementSibling;
            if (previousSibling) {
                console.log(previousSibling);
            } else {
                console.log("No previous silbling");
            }
            console.log("next silbling")
            const nextSibling = node.parentElement.nextElementSibling;
            if (nextSibling) {
                console.log(nextSibling);
            } else {
                console.log("No next silbling");
            }
            console.log("grandfather")
            console.log(parent.parentElement)
            console.log("grandfather silblings")
            let grandfatherSilblings = parent.parentElement.parentElement.children;
            for (const grandfatherSilbling of grandfatherSilblings) {
                if (grandfatherSilbling !== parent.parentElement) {
                    console.log(grandfatherSilbling)
                }
            }
            let parentSilblings = parent.parentElement.children;
            console.log("parent silblings and cousins")
            for (const parentSilbling of parentSilblings) {
                if (parentSilbling !== parent) {
                    console.log(parentSilbling, parentSilbling.children)
                }
            }
            let children = node.parentElement.children;
            let grandchildren = [];
            console.log("children")
            if(children.length>0) {
                for (const child of children) {
                    console.log(child)
                    grandchildren.push(child.children);
                }
            } else{
                console.log("no children")
            }
            console.log("grandchildren")
            if(grandchildren.length>0){
                for (const grandchild of grandchildren) {
                    console.log(grandchild);
                }
            }else{
                console.log("no grandchildren")
            }

        })

    }


});