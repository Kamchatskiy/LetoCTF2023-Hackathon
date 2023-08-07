git add --all
echo -n "Enter a comment: "
read comment
git commit -m "$comment"
git push origin